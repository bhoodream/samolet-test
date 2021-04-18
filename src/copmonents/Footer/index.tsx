import { FC } from 'react';
import { Layout, Row, Col, Typography } from 'antd';

const Footer: FC = () => {
    return (
        <Layout.Footer>
            <Row justify="center">
                <Col>
                    <Typography.Paragraph type={'secondary'}>
                        {'разработал '}
                        <a
                            href={'https://github.com/bhoodream'}
                            target={'_blank'}
                        >
                            <i>{'Федоров Вадим'}</i>
                        </a>
                    </Typography.Paragraph>
                </Col>
            </Row>
        </Layout.Footer>
    );
};

export default Footer;
