import { FC } from 'react';
import { Row, Col } from 'antd';

const Content: FC = (props) => {
    return (
        <Row>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }}>
                {props.children}
            </Col>
        </Row>
    );
};

export default Content;
