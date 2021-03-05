const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 1
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 2
  },
  {
    title: 'Etiam justo.',
    content: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 2
  },
  {
    title: 'Nulla tellus.',
    content: 'In hac habitasse platea dictumst.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;