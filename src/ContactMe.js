import './portofolio.scss';

function ContactMe({theme}) {
    return (
        <div className='contact'>
            <div className='project_title'>
                <div className={`horizontal_line_${theme}`} />
                <h1 className={`project_title_text_${theme}`}>Contact Me!</h1>
                <div className={`horizontal_line_${theme}`} />
            </div>
            <p className={`contact_paragraph_${theme}`}>
                Don't hesitate to reach out!
                Whether you have a question, a proposal, or just want to connect, I'm all ears.
                I'm passionate about what I do and I'm always looking for new challenges and opportunities.
                Let's turn your ideas into reality together. I'm just one message away!
            </p>
            <button className={`resume_${theme}`}>
                <a href="mailto:efstathiosdemenagas@gmail.com" target="_blank" className={`resume_text_${theme}`}>Say Hello!</a>
            </button>
        </div>
    )
};

export default ContactMe;