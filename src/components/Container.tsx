import React from 'react';
type ContainerProps = {
    styles: React.CSSProperties
}
const Container = (props: ContainerProps) => {
    return (
        // Style Props
        <div style={props.styles}>
            <h3>Hello</h3>
        </div>
    );
};

export default Container;