exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          username: 'pizzahut',
          email: 'billy@pizzahut.com',
          password: 'pizza1',
          first_name: 'Azzip',
          last_name: 'Tuh',
          foursquare_id: '12',
          business_name: 'Pizza Hut',
          latitude: 29.201598971549644,
          longitude: -98.66165965560205,
          address: '123 pizza lane',
          website_url: 'www.pizzahut.com',
          official_description: 'The Hutt of Pizza',
          thumbnail_url: 'pizzahut.com/1.jpg',
          street_view_image: 'google.com/1.jpg',
          order_service: 'Doordash',
          store_bio: 'We made this place and that place makes pizza',
          dietary_offerings: ['vegan']
        },
        {
            username: 'dominoes',
            email: 'betty@dominoes.com',
            password: 'pizza1',
            first_name: 'Noes',
            last_name: 'Dom',
            foursquare_id: '13',
            business_name: 'Dominoes Pizza',
            latitude:40.70501507088636,
            longitude: -73.93361652500724,
            address: '13 pizza rd',
            website_url: 'www.dominoes.com',
            official_description: 'The Old Boardgame of Pizza',
            thumbnail_url: 'dominoes.com/1.jpg',
            street_view_image: 'google.com/2.jpg',
            order_service: 'We Deliver!',
            store_bio: 'Theres pizza here and you can eat some',
            dietary_offerings: ['Even the cheese is meat']
          },
          {
            username: 'bigpapa',
            email: 'jacob@papajohns.com',
            password: 'pizza1',
            first_name: 'Papa',
            last_name: 'John',
            foursquare_id: '12',
            business_name: 'Papa Johns',
            latitude: 29.501598971549644,
            longitude: -98.66165965560205,
            address: '30 pizza st',
            website_url: 'www.papajohns.com',
            official_description: 'The Papa of Pizza',
            thumbnail_url: 'papajohns.com/1.jpg',
            street_view_image: 'google.com/3.jpg',
            order_service: 'Waitr',
            store_bio: 'We said some racist stuff but we still got some pizza here',
            dietary_offerings: ['vegetarian']
          },
          {
            username: 'pizzahut2',
            email: 'bill2@pizzahut.com',
            password: 'pizza1',
            first_name: 'Azzip',
            last_name: 'Tuh',
            foursquare_id: '12',
            business_name: 'Pizza Hut',
            latitude: 22.201598971549644,
            longitude: -98.66165965560205,
            address: '123 pizza lane',
            website_url: 'www.pizzahut.com',
            official_description: 'The Hutt of Pizza',
            thumbnail_url: 'pizzahut.com/1.jpg',
            street_view_image: 'google.com/1.jpg',
            order_service: 'Doordash',
            store_bio: 'We made this place and that place makes pizza',
            dietary_offerings: ['vegan']
          },
          {
              username: 'dominoes2',
              email: 'bett2y@dominoes.com',
              password: 'pizza1',
              first_name: 'Noes',
              last_name: 'Dom',
              foursquare_id: '13',
              business_name: 'Dominoes Pizza',
              latitude: 22.801598971549644,
              longitude: -98.66165965560205,
              address: '13 pizza rd',
              website_url: 'www.dominoes.com',
              official_description: 'The Old Boardgame of Pizza',
              thumbnail_url: 'dominoes.com/1.jpg',
              street_view_image: 'google.com/2.jpg',
              order_service: 'We Deliver!',
              store_bio: 'Theres pizza here and you can eat some',
              dietary_offerings: ['Even the cheese is meat']
            },
            {
              username: 'bigpapa2',
              email: 'jacob2@papajohns.com',
              password: 'pizza1',
              first_name: 'Papa',
              last_name: 'John',
              foursquare_id: '12',
              business_name: 'Papa Johns',
              latitude: 22.501598971549644,
              longitude: -98.66165965560205,
              address: '30 pizza st',
              website_url: 'www.papajohns.com',
              official_description: 'The Papa of Pizza',
              thumbnail_url: 'papajohns.com/1.jpg',
              street_view_image: 'google.com/3.jpg',
              order_service: 'Waitr',
              store_bio: 'We said some racist stuff but we still got some pizza here',
              dietary_offerings: ['vegetarian']
            }



      ]);
    });
  };
