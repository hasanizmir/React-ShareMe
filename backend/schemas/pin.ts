export default {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'userId',
      title: 'UserID',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy', // sanity is smart enough to  know that this is going to be a reference to another document
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array', // users who saved image
      of: [{ type: 'save' }]
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment' }]  // comment shema (comment.js)
    },
  ],
}
