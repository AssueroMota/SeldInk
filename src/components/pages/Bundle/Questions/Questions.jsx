import { useState } from 'react';

const questions = [
    {
        title: 'Six scraps hurting or zoom on existing point up?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label1'
    },
    {
        title: 'Six scraps hurting or zoom on existing point up?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label2'
    },
    {
        title: 'Six scraps hurting or zoom on existing point up?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label3'
    },
    {
        title: 'Six scraps hurting or zoom on existing point up?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label4'
    },
    {
        title: 'Six scraps hurting or zoom on existing point up?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis turpis eu lacus bibendum, quis consectetur tellus ultrices. Sed et augue fermentum, mattis tellus sit amet, consequat libero.',
        label: 'label5'
    },
    {
        title: 'Six scraps hurting or zoom on existing point up?',
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