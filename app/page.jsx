import Feed from '@components/Feed'
const Home = () => {
  return (
    <section  className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI powered prompts</span>
            </h1>
            <p>Promptopia is and open-source AI promoting tool for mordern world to discover, create and share creative prompts</p>
            <Feed />

    </section>
  )
}

export default Home