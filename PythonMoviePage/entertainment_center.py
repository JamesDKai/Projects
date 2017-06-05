import fresh_tomatoes
import media

toy_story = media.Movie("Toy Story",
                        "A story about a boy and his toys that come to life", 
                        "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                        "https://www.youtube.com/watch?v=KYz2wyBy3kc")
#print(toy_story.storyline)

avatar = media.Movie("Avatar",
                     "A marine on an alien planet",
                     "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg",
                     "https://www.youtube.com/watch?v=5PSNL1qE6VY")
#print(avatar.storyline)
#avatar.show_trailer()

john_wick = media.Movie("John Wick",
                        "Neo chose to take the blue pill and avenges his dog and retrieve his stolen car",
                        "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
                        "https://www.youtube.com/watch?v=C0BMx-qxsP4")
#print(john_wick.storyline)
#john_wick.show_trailer()

school_of_rock = media.Movie("School of Rock",
                             "Using rock music to learn",
                             "https://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg",
                             "https://www.youtube.com/watch?v=XCwy6lW5Ixc")

ratatouille = media.Movie("Ratatouille",
                          "A rat is a chef in Paris",
                          "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
                          "https://www.youtube.com/watch?v=c3sBBRxDAqk")

midnight_in_paris = media.Movie("Midnight In Paris",
                                "Going back in time to meet authors",
                                "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnight_in_Paris_Poster.jpg",
                                "https://www.youtube.com/watch?v=FAfR8omt-CY")

the_hunger_games = media.Movie("The Hunger Games",
                               "A girl saves humanity with a bow",
                               "https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg",
                               "https://www.youtube.com/watch?v=4S9a5V9ODuY")

movies = [toy_story, avatar, john_wick, school_of_rock, ratatouille, midnight_in_paris, the_hunger_games]
#fresh_tomatoes.open_movies_page(movies)
#print(media.Movie.VALID_RATINGS)
#print(media.Movie.__doc__)


