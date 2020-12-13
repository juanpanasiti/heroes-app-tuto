import React, { useMemo } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    // const hero = getHeroById(heroeId);
    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    if (!hero) {
        return <Redirect to='/' />;
    }

    const handleReturn = () => {
        if (history.length > 2) {
            history.goBack();
        } else {
            if (publisher === 'Marvel Comics') {
                history.replace('/marvel');
            } else {
                history.replace('/dc');
            }
        }
    };
    return (
        <>
            <Row className='mt-5'>
                <Col md={4}>
                    <Image src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
                </Col>
                <Col md={8} className='animate__animated animate__zoomInUp'>
                    <h3> {superhero} </h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b> Alter ego: </b>
                            {alter_ego}
                        </li>
                        <li className='list-group-item'>
                            <b> Publisher: </b>
                            {publisher}
                        </li>
                        <li className='list-group-item'>
                            <b> First Appearance: </b>
                            {first_appearance}
                        </li>
                    </ul>
                    <h5>Characters</h5>
                    <p>{characters}</p>

                    <Button variant='outline-warning' onClick={handleReturn}>
                        Volver
                    </Button>
                </Col>
            </Row>
        </>
    );
};
