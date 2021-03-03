class BooksController < ApplicationController
  def app
    render component: "App"
   end

   # GET localhost:3000/items => render items json
   #[{"id":1,"category":"misc","name":"XML","description":"The GB panel is down, hack the primary panel so we can transmit the EXE array!","likes":0,"created_at":"2021-03-03T16:48:47.564Z","updated_at":"2021-03-03T16:48:47.564Z"}]
   def index
     @books = Book.order(title: :desc)
     render json: @books
   end

   def destroy
     @book = Book.find(params[:id]).destroy
     render json: @book
   end
end
