import React from 'react';
import { useEffect } from 'react';
import SvgPoland from '../../components/poland/SvgPoland';
import { coloriseMap } from '../../modules/Poland/d3Code';
import powiatySvg from '../../components/poland/powiaty.svg';

const Poland = () => {
    useEffect(() => {
        // coloriseMap();
    }, [])

    return (
        <div>
            <p>test</p>
            {/* {powiatySvg} */}
            <SvgPoland />

        </div>
    );
};

export default Poland;