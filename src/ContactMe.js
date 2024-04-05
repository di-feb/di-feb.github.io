import './portofolio.scss';

function ContactMe() {
    return (
        <div className='contact'>
            <div className='project_title'>
                <div className='horizontal_line' />
                <h1 className='project_title_text'>Contact Me!</h1>
                <div className='horizontal_line' />
            </div>
            <p className='contact_paragraph'>
                Don't hesitate to reach out!
                Whether you have a question, a proposal, or just want to connect, I'm all ears.
                I'm passionate about what I do and I'm always looking for new challenges and opportunities.
                Let's turn your ideas into reality together. I'm just one message away!
            </p>
            <button className='resume'>
                <a href="mailto:efstathiosdemenagas@gmail.com" target="_blank" className='resume_text'>Say Hello!</a>
            </button>
        </div>
    )
};

export default ContactMe;