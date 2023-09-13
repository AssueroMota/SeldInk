import { useState } from 'react';

const questions = [
    {
        title: 'How do I  know  what kind of website will take care of my business needs?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label1'
    },
    {
        title: 'Is an iOS and Android app the right choice for my business?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label2'
    },
    {
        title: 'What is a word press plugin?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label3'
    },
    {
        title: 'How to choose the e-commerce platform for my online store?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label4'
    },
    {
        title: 'How long is it going to take for my project to be done?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label5'
    },
    {
        title: 'Can you build my development project if I am not local to the NYC area?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label6'
    }
]

const Questions = () => {
    const [ isLabel, setLabel ] = useState('');

    return (
        <section className="questions" id="questions">
            <div className="questions__col-left">
                <h3 className="title">Frequently asked questions</h3>
                <p className="description">Here are some of our most frequently answered Web Design questions and answers.</p>
            </div>
            <div className="questions__col-right">
                {questions.map((question,indice) => (
                    <div key={indice} className="question-item">
                        <h1 className={`ask ${isLabel === question.label ? 'open' : 'close'}`} onClick={() => {
                            if(question.label === questions[indice].label){
                                setLabel(question.label);
                            }
                        }}>{question.title}</h1>
                        {
                            isLabel === question.label &&
                                <p className="answer">{question.description}</p>
                        }
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Questions;