import React, { useMemo } from 'react';
import queryString from 'query-string';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [form, handleChange] = useForm({ search: q });

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const handleSearch = (event) => {
        event.preventDefault();
        history.push(`?q=${form.search}`);

        console.log(q);
    };
    return (
        <div className='container-fluid'>
            <h1>Search Screen</h1>
            <hr />
            <Row>
                <Col md={5} className='animate__animated animate__fadeIn'>
                    <h4> Search Form</h4>
                    <hr />
                    <Form onSubmit={handleSearch}>
                        <Form.Control type='text' placeholder='Find your hero' onChange={handleChange} name='search' value={form.search} autoComplete='off' />
                    </Form>
                    <Button type='submit' onClick={handleSearch} variant='outline-primary' block className='mt-1'>
                        Search...
                    </Button>
                </Col>
                <Col md={7} className='animate__animated animate__fadeIn'>
                    <h4>Results</h4>
                    <hr />
                    {q === '' && (
                        <Alert variant='info' className='animate__animated animate__shakeY'>
                            <Alert.Heading>Searh for a hero!</Alert.Heading>
                            <p>
                                Write something in the <b>search box input</b>
                            </p>
                        </Alert>
                    )}

                    {q !== '' && heroesFiltered.length === 0 && (
                        <Alert variant='warning' className='animate__animated animate__shakeY'>
                            <Alert.Heading>No hero fond!</Alert.Heading>
                            <p>
                                No one hero was found with the filter <b>'{q}'</b>
                            </p>
                        </Alert>
                    )}

                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </Col>
            </Row>
        </div>
    );
};
