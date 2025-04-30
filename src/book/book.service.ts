import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './Schema/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) { }
  
 async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = new this.bookModel(createBookDto);
    return await newBook.save();
  }

 async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
     const book = await this.bookModel.findById(id).exec();
     if (!book) {
       throw new NotFoundException(`Book with ID ${id} not found`);
     }
     return book;
   }

 async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
      const updatedBook = await this.bookModel
        .findByIdAndUpdate(id, updateBookDto, { new: true })
        .exec();

      if (!updatedBook) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      return updatedBook;
  }

 async remove(id: string): Promise<Book> {
    const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();

    if (!deletedBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return deletedBook;
  }
}
