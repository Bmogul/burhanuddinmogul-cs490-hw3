// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Comment from './Comment'
export const gen = () =>{
    return(<Comment
        comment={{
            name: 'Burhanuddin',
            body: 'This is the first comment',
            createdAt: '2023-09-19T19:01:52'
        }}
    />)
}

export default{
    title: 'Components/Comment',
    component: Comment,
}
