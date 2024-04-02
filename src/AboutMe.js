import './portofolio.css';

function AboutMe() {
    return (
        <div className='about'>
            <h4 className='hello'>Hello my fellow programmers, I am </h4>
            <h1 className='name'>Stathis Demenagas</h1>
            <div className='paragraph_a'>
                <p > I am a final year student specializing in </p> 
                <p className='emphasis'> Software Engineering </p>
                <p > at the </p>
                <a href="http://www.di.uoa.gr" target="_blank" className='emphasis'>DiT, Uoa.</a>
            </div>
            <p className='paragraph'>My passion lies in crafting innovative and user-friendly software solutions.</p>
            <p className='paragraph'>I have honed my problem-solving skills through real-world programming challenges, primarily using C and C++.</p>
            <p className='paragraph'>My experience extends to building dynamic web applications. </p>
            <p className='paragraph'>Beyond the world of coding, I enjoy going to the gym, boxing, and playing chess.</p>

        </div>
    )
}

export default AboutMe;
