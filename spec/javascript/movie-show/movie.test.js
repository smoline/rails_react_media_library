import React from 'react'
import { shallow } from 'enzyme'
import Movie from '../../../app/javascript/components/movie-show/movie'

const history = {
  push: jest.fn()
}

const match = {
  params: { id: 25 }
}

describe('Movies', () => {
  describe('componentDidMount', () => {
    it('sets the state componentDidMount', async () => {

      window.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({
            status: 200,
            ok: true,
            json: () => new Promise((resolve, reject) => {
              resolve({
                movie: {
                  id: 25,
                  title: "Amadeus",
                  description: "The incredible story of genius musician Wolfgang Amadeus Mozart, told in flashback by his peer and secret rival Antonio Salieri – now confined to an insane asylum.",
                  tmdb_id: 279,
                  imdb_id: "",
                  release_date: "1984-10-26",
                  runtime: 160,
                  tagline: "...Everything you've heard is true",
                  movie_image_url: "http://image.tmdb.org/t/p/w185//flnoqdC38mbaulAeptjynOFO7yi.jpg",
                  created_at: "2020-01-28T15:52:51.042Z",
                  updated_at: "2020-01-28T15:52:51.042Z",
                  owner: {
                    id: 25,
                    notes: "",
                    upc: null,
                    rating: 3,
                    user_id: 1,
                    ownable_type: "Movie",
                    ownable_id: 25,
                    created_at: "2020-01-28T15:52:51.046Z",
                    updated_at: "2020-01-28T15:52:51.046Z"
                  }
                }
              })
            })
          })
        })
      })

      const component = shallow(
        <Movie
          history={history}
          match={match}
          movie={{}}
        />
      )

      expect(component.exists()).toBe(true)
      expect(component.state('movie')).toBeTruthy()
      setImmediate(() => {
        console.log(component.state())
        expect(component.state().movie.id).toEqual(25)
      })
    })
  })
})