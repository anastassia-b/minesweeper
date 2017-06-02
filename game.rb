require_relative "Board"
require_relative "Tile"

class Game
  attr_reader :size

  def initialize(size, bombs, player)
    @board = Board.new(size, bombs)
    @player = player
  end

  def run
    #print welcome message
    @board.render
    puts "Make your move: "
    move = gets.chomp.split(",").map(&:to_i)

    #if choose a position, REVEAL (recursion). if bomb, lose
    puts "Congratulations, you win!"
  end

  def over?


  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Enter size of board: "
  size = gets.chomp.to_i
  puts "Enter number of bombs: "
  bombs = gets.chomp.to_i
  game = Game.new(size, bombs, "Anastassia")
  game.run
end
