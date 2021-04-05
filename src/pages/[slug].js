import fs from 'fs'

const Post = ({slug}) => (
  <div>
    <div>{slug}</div>
  </div>
)

export const getStaticPaths = async () => {

  const files = fs.readdirSync('posts')
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }))
  return {
    path,
    fallback: false
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  return {
    props: {
      slug
    }
  }
}

export default Post