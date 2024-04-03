import './portofolio.scss';

function AboutMe() {
    return (
        <div className='about'>
            <h4 className='hello'>Hello my fellow programmers, I am </h4>
            <h1 className='name'>Stathis Demenagas</h1>
            <div className='paragraph'>
                <div className='paragraph_a'>
                    <span style={{ marginRight: '4px' }}> I am a final year student specializing in </span>
                    <span className='emphasis' style={{ marginRight: '4px' }}> Software Engineering </span>
                    <span style={{ marginRight: '4px' }}> at the </span>
                    <a href="http://www.di.uoa.gr" target="_blank" className='emphasis'>
                        DiT, Uoa.
                    </a>
                </div>
                <div className='paragraph_b'>
                    <p className='paragraph_b'>My passion lies in crafting innovative and user-friendly software solutions.</p>
                    <p className='paragraph_b'>I have honed my problem-solving skills through real-world programming challenges.</p>
                    <p className='paragraph_b'>Beyond the world of coding, I enjoy going to the gym, boxing, and playing chess.</p>
                </div>
            </div>
            <button className='resume'>
                <a href="https://drive.google.com/file/d/1J82VaoxR2PtpS_zVi14dR2MPIqw3nEgG/view?usp=sharing" target="_blank" className='resume_text'>Resume</a>
            </button>
        </div>
    )
}

export default AboutMe;
