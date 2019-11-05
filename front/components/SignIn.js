import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';



const SignIn = () => {
    const { Step } = Steps;

    const [steps, setSteps] = useState(0);
    const contents = [
        {
            title: 'step1',
            content: <div>스텝1</div>,
        },
        {
            title: 'step2',
            content: <div>스텝2</div>,
        },
        {
            title: 'step3',
            content: <div>스텝3</div>,
        },
    ];

    const next = () => {
        setSteps(steps => steps + 1);
    };

    const prev = () => {
        setSteps(steps => steps - 1);
    };

    return (
        <>
            <Button>Sign In</Button>
            <div>
                <Steps current={steps} style={{ marginTop: '30px'}}>
                    {contents.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content" style={{ marginTop: '30px' }}>
                    {contents[steps].content}
                </div>
                <div className="steps-action" style={{ marginTop: '30px'}}>
                    {steps < contents.length - 1 && (
                        <Button type="primary" onClick={() => next()}>Next</Button>
                    )}
                    {steps === contents.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                    )}
                    {steps > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => prev()}>Previous</Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default SignIn;
