# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create!({
  title: "Lincoln",
  tmdb_id: 72976,
  imdb_id: "tt0443272",
  description: "A revealing drama that focuses on the 16th President's tumultuous final months in office. In a nation divided by war and the strong winds of change, Lincoln pursues a course of action designed to end the war, unite the country and abolish slavery. With the moral courage and fierce determination to succeed, his choices during this critical moment will change the fate of generations to come.",
  release_date: "2012-11-09",
  runtime: 149,
  tagline: "With the moral courage and fierce determination to succeed, his choices will change the fate of generations to come.",
  movie_image_url: "http://image.tmdb.org/t/p/w185/gkkiDu9srCCbCMxGKwNwKCxK7KF.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "Excellent Movie",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 1
})

Person.create!({
  name: "Daniel Day-Lewis",
  biography: "Daniel Michael Blake Day-Lewis (born 29 April 1957) is an English actor with both British and Irish citizenship. His portrayals of Christy Brown in My Left Foot (1989), Daniel Plainview in There Will Be Blood (2007) and Abraham Lincoln in Lincoln (2012) won Academy and BAFTA Awards for Best Actor, and Screen Actors Guild as well as Golden Globe Awards for There Will Be Blood and Lincoln. His role as Bill \"The Butcher\" Cutting in Gangs of New York (2002) earned him the BAFTA Award and a Screen Actors Guild Award.\n\nDay-Lewis, who grew up in London, is the son of actress Jill Balcon and the Anglo-Irish Poet Laureate, Cecil Day-Lewis. He is a method actor, known for his constant devotion to and research of his roles. Often, he will remain completely in character for the duration of the shooting schedule of his films, even to the point of adversely affecting his health. He is known as one of the most selective actors in the film industry, having starred in only seven films since 1997, with as many as five years between roles. Throughout his career Day-Lewis has received numerous accolades and remains the only actor to win the Academy Award for Best Actor three times. In 2012, Time magazine named Day-Lewis \"The World's Greatest Actor\". In 2017, Day-Lewis announced his retirement from acting, with Phantom Thread (2017) being his final film role.\n\nDescription above from the Wikipedia article Daniel Day-Lewis, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
  birthday: "1957-04-29",
  deathday: "",
  place_of_birth: "Greenwich, London, England, UK",
  gender: "Male",
  profile_path_url: "http://image.tmdb.org/t/p/w185/3kNA9VcmymoEwT0btQ4bvMYxzcP.jpg",
  tmdb_people_id: 11856,
  imdb_people_id: "nm0000358"
})

Cast.create!({
  character: "Abraham Lincoln",
  person_id: 1,
  castable_type: "Movie",
  castable_id: 1
})

Movie.create!({
  title: "Letters from Iwo Jima",
  tmdb_id: 1251,
  imdb_id: "",
  description: "The story of the battle of Iwo Jima between the United States and Imperial Japan during World War II, as told from the perspective of the Japanese who fought it.",
  release_date: "2006-12-19",
  runtime: 141,
  tagline: "The battle of Iwo Jima seen through the eyes of the Japanese soldiers.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//nWJJqOryTQOmVXvKUkLcEETUHgT.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 2
})

Movie.create!({
  title: "Flags of Our Fathers",
  tmdb_id: 3683,
  imdb_id: "",
  description: "There were five Marines and one Navy Corpsman photographed raising the U.S. flag on Mt. Suribachi by Joe Rosenthal on February 23, 1945. This is the story of three of the six surviving servicemen – John 'Doc' Bradley, Pvt. Rene Gagnon and Pvt. Ira Hayes, who fought in the battle to take Iwo Jima from the Japanese.",
  release_date: "2006-10-18",
  runtime: 132,
  tagline: "They fight for their country but they die for their friends.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//4tbKYa8vZSsTCHKca9D6rS4NJ08.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 3
})

Movie.create!({
  title: "The Man Who Shot Liberty Valance",
  tmdb_id: 11697,
  imdb_id: "",
  description: "A senator, who became famous for killing a notorious outlaw, returns for the funeral of an old friend and tells the truth about his deed.",
  release_date: "1962-04-22",
  runtime: 123,
  tagline: "Together For The First Time - James Stewart - John Wayne - in the masterpiece of four-time Academy Award winner John Ford",
  movie_image_url: "http://image.tmdb.org/t/p/w185//qEczX5Rruux72XOHDeeLJEvmZkV.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 4
})

Movie.create!({
  title: "Once Upon a Time in the West",
  tmdb_id: 335,
  imdb_id: "",
  description: "This classic western masterpiece is an epic film about a widow whose land and life are in danger as the railroad is getting closer and closer to taking them over. A mysterious harmonica player joins forces with a desperado to protect the woman and her land.",
  release_date: "1968-12-21",
  runtime: 175,
  tagline: "There were three men in her life. One to take her... one to love her... and one to kill her.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//rVAHRtAMhV8QVXQMQ8NxNbZXCDp.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 5
})

Movie.create!({
  title: "Real Genius",
  tmdb_id: 14370,
  imdb_id: "",
  description: "Chris is the top brain who just wants to party, Mitch is the 15-year-old college wiz kid. Supposedly hard at work on a lab project with a mysterious deadline, they still find time to use their genius to discover new ways to have fun.",
  release_date: "1985-08-07",
  runtime: 106,
  tagline: "Who ELSE can turn lasers into light shows, aircraft into armchairs, and high-tech into hijinks?",
  movie_image_url: "http://image.tmdb.org/t/p/w185//1HxrHluqDwou74TrE3bRqoiQN9N.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 6
})

Movie.create!({
  title: "Inception",
  tmdb_id: 27205,
  imdb_id: "",
  description: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
  release_date: "2010-07-14",
  runtime: 148,
  tagline: "Your mind is the scene of the crime.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 7
})

Movie.create!({
  title: "Sherlock Holmes",
  tmdb_id: 10528,
  imdb_id: "",
  description: "Eccentric consulting detective, Sherlock Holmes and Doctor John Watson battle to bring down a new nemesis and unravel a deadly plot that could destroy England.",
  release_date: "2009-12-23",
  runtime: 128,
  tagline: "Nothing escapes him.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//22ngurXbLqab7Sko6aTSdwOCe5W.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 8
})

Movie.create!({
  title: "The Blind Side",
  tmdb_id: 22881,
  imdb_id: "",
  description: "Oversized African-American, Michael Oher, the teen from across the tracks and a broken home, has nowhere to sleep at age 16. Taken in by an affluent Memphis couple, Michael embarks on a remarkable rise to play for the NFL.",
  release_date: "2009-11-20",
  runtime: 129,
  tagline: "Based on the extraordinary true story",
  movie_image_url: "http://image.tmdb.org/t/p/w185//wEGFSgPebLk6g1ngKsJ6a46PYLV.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 9
})

Movie.create!({
  title: "The Hangover",
  tmdb_id: 18785,
  imdb_id: "",
  description: "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.",
  release_date: "2009-06-05",
  runtime: 100,
  tagline: "Some guys just can't handle Vegas.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//uluhlXubGu1VxU63X9VHCLWDAYP.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 10
})

Movie.create!({
  title: "The Dark Knight",
  tmdb_id: 155,
  imdb_id: "",
  description: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
  release_date: "2008-07-16",
  runtime: 152,
  tagline: "Why So Serious?",
  movie_image_url: "http://image.tmdb.org/t/p/w185//1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 11
})

Movie.create!({
  title: "The Departed",
  tmdb_id: 1422,
  imdb_id: "",
  description: "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
  release_date: "2006-10-05",
  runtime: 151,
  tagline: "Lies. Betrayal. Sacrifice. How far will you take it?",
  movie_image_url: "http://image.tmdb.org/t/p/w185//tGLO9zw5ZtCeyyEWgbYGgsFxC6i.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 12
})

Movie.create!({
  title: "Million Dollar Baby",
  tmdb_id: 70,
  imdb_id: "",
  description: "Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.",
  release_date: "2004-12-15",
  runtime: 132,
  tagline: "Beyond his silence, there is a past. Beyond her dreams, there is a feeling. Beyond hope, there is a memory. Beyond their journey, there is a love.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//h4VZKi2Jt4VoBYJmtC4c3bO8KqM.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 13
})

Movie.create!({
  title: "The Lord of the Rings: The Return of the King",
  tmdb_id: 122,
  imdb_id: "",
  description: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
  release_date: "2003-12-01",
  runtime: 201,
  tagline: "The eye of the enemy is moving.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//uexxR7Kw1qYbZk0RYaF9Rx5ykbj.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 14
})

Movie.create!({
  title: "The Lord of the Rings: The Two Towers",
  tmdb_id: 121,
  imdb_id: "",
  description: "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
  release_date: "2002-12-18",
  runtime: 179,
  tagline: "A New Power Is Rising.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//wf3v0Pn09jnT5HSaYal7Ami3bdA.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 15
})

Movie.create!({
  title: "The Matrix",
  tmdb_id: 603,
  imdb_id: "",
  description: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
  release_date: "1999-03-30",
  runtime: 136,
  tagline: "Welcome to the Real World.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//lZpWprJqbIFpEV5uoHfoK0KCnTW.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 16
})

Movie.create!({
  title: "The Shawshank Redemption",
  tmdb_id: 278,
  imdb_id: "",
  description: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
  release_date: "1994-09-23",
  runtime: 142,
  tagline: "Fear can hold you prisoner. Hope can set you free.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 17
})

Movie.create!({
  title: "Natural Born Killers",
  tmdb_id: 241,
  imdb_id: "",
  description: "Two victims of traumatized childhoods become lovers and psychopathic serial murderers irresponsibly glorified by the mass media.",
  release_date: "1994-08-25",
  runtime: 119,
  tagline: "The Media Made Them Superstars.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//w5sruoTQ87PFAGRJQyyaCOM1C4A.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 18
})

Movie.create!({
  title: "The Bodyguard",
  tmdb_id: 619,
  imdb_id: "",
  description: "A former Secret Service agent grudgingly takes an assignment to protect a pop idol who's threatened by a crazed fan. At first, the safety-obsessed bodyguard and the self-indulgent diva totally clash. But before long, all that tension sparks fireworks of another sort, and the love-averse tough guy is torn between duty and romance.",
  release_date: "1992-11-25",
  runtime: 129,
  tagline: "Never let her out of your sight. Never let your guard down. Never fall in love.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//cbUiIu4357JQ4FBCtRJovHNv1gi.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 19
})

Movie.create!({
  title: "Unforgiven",
  tmdb_id: 33,
  imdb_id: "",
  description: "William Munny is a retired, once-ruthless killer turned gentle widower and hog farmer. To help support his two motherless children, he accepts one last bounty-hunter mission to find the men who brutalized a prostitute. Joined by his former partner and a cocky greenhorn, he takes on a corrupt sheriff.",
  release_date: "1992-08-07",
  runtime: 131,
  tagline: "Some legends will never be forgotten. Some wrongs can never be forgiven.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//km6qw4qUkHQRN5y2U1juM1WkBFh.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 20
})

Movie.create!({
  title: "Driving Miss Daisy",
  tmdb_id: 403,
  imdb_id: "",
  description: "The story of an old Jewish widow named Daisy Werthan and her relationship with her colored chauffeur Hoke. From an initial mere work relationship grew in 25 years a strong friendship between the two very different characters in a time when those types of relationships where shunned upon. Oscar winning tragic comedy with a star-studded cast and based on a play of the same name by Alfred Uhry.",
  release_date: "1989-12-13",
  runtime: 99,
  tagline: "The funny, touching and totally irresistible story of a working relationship that became a 25-year friendship.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//pSybZBTSHOrPhDjFThDE9YEhCgT.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 21
})

Movie.create!({
  title: "Full Metal Jacket",
  tmdb_id: 600,
  imdb_id: "",
  description: "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
  release_date: "1987-06-26",
  runtime: 116,
  tagline: "Vietnam can kill me, but it can’t make me care.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//zoiGcNlYBR0r2fO2uP44XQF6S1W.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 22
})

Movie.create!({
  title: "Lethal Weapon",
  tmdb_id: 941,
  imdb_id: "",
  description: "Veteran buttoned-down LAPD detective Roger Murtaugh is partnered with unhinged cop Martin Riggs, who -- distraught after his wife's death -- has a death wish and takes unnecessary risks with criminals at every turn. The odd couple embark on their first homicide investigation as partners, involving a young woman known to Murtaugh with ties to a drug and prostitution ring.",
  release_date: "1987-03-06",
  runtime: 110,
  tagline: "If these two can learn to stand each other... the bad guys don't stand a chance.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//r4njF5h9IN0y1ZKFP1hYFmZU3Rk.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 23
})

Movie.create!({
  title: "The Color Purple",
  tmdb_id: 873,
  imdb_id: "",
  description: "In the southern United States in the 1930s, a male-dominated African American woman fights her way through a troubled life.",
  release_date: "1985-12-18",
  runtime: 154,
  tagline: "It's about life. It's about love. It's about all of us.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//2a50LyRInWGLWq3u3DeGBQnvBHR.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 24
})

Movie.create!({
  title: "Amadeus",
  tmdb_id: 279,
  imdb_id: "",
  description: "The incredible story of genius musician Wolfgang Amadeus Mozart, told in flashback by his peer and secret rival Antonio Salieri – now confined to an insane asylum.",
  release_date: "1984-10-26",
  runtime: 160,
  tagline: "...Everything you've heard is true",
  movie_image_url: "http://image.tmdb.org/t/p/w185//flnoqdC38mbaulAeptjynOFO7yi.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 25
})

Movie.create!({
  title: "Risky Business",
  tmdb_id: 9346,
  imdb_id: "",
  description: "Meet Joel Goodson, an industrious, college-bound 17-year-old and a responsible, trustworthy son. However, when his parents go away and leave him home alone in the wealthy Chicago suburbs with the Porsche at his disposal he quickly decides he has been good for too long and it is time to enjoy himself. After an unfortunate incident with the Porsche Joel must raise some cash, in a risky way.",
  release_date: "1983-08-05",
  runtime: 98,
  tagline: "Time of your life, Huh Kid.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//60ioiHP0H6PHYcXz7oJvqildpNZ.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 26
})

Movie.create!({
  title: "Chariots of Fire",
  tmdb_id: 9443,
  imdb_id: "",
  description: "The true story of British athletes preparing for and competing in the 1924 Summer Olympics.",
  release_date: "1981-05-15",
  runtime: 123,
  tagline: "This is the story of two men who run...not to run...but to prove something to the world. They will sacrifice anything to achieve their goals...Except their honor.",
  movie_image_url: "http://image.tmdb.org/t/p/w185//tDt0QreHAiM44km0Iek0UwLdyIW.jpg"
})

Owner.create!({
  user_id: 1,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 27
})

Owner.create!({
  user_id: 2,
  notes: "Excellent Movie",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 1
})

Owner.create!({
  user_id: 2,
  notes: "",
  upc: nil,
  rating: 3,
  ownable_type: "Movie",
  ownable_id: 27
})