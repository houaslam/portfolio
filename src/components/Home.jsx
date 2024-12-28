import '../styles/Main.css'

function Home( ){
    return (
    <main>
        <h1 className='header'>Hello, my name is</h1>
        <h1 className='Username'>Hajar Ouaslam</h1>
        <h3 className='info'>Full stack developer</h3>
        <div className='links'>
            <a className='link white' href='#'>
                <img width="30" height="30" src="/images/white-arrow.png" alt="long-arrow-right"/>
                <p>see my projects</p>
            </a>
            <a className='link green' href='#'>
                <img width="30" height="30" src="/images/green-arrow.png" alt="long-arrow-right"/>
                    <p className='green'>more about me</p>
            </a>
        </div>
    </main>
    )
}

export default Home