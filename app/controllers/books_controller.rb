class BooksController < ApplicationController
  def app
    render component: "App"
   end

   # GET localhost:3000/items => render items json
   def index
     @books = Book.order(title: :desc)
     render json: @books
   end

   def create
    @book = Book.new(books_params)
    if @book.save
       render json: @book
    else
       render json: {error: 422, message: @book.errors.full_messages}
    end
   end

   def edit
    @book = Book.find(params[:id])

    render json: @book
  end

  def update
    book = Book.find(params[:id])
     
    if(book.update(books_params))
        render json: book
    else
       render json: {error: 422, message: book.errors.full_messages}
    end
  end

   def destroy
     @book = Book.find(params[:id]).destroy
     render json: @book
   end

   private

   def books_params
     params.require(:book).permit(:title, :author)
   end


end
