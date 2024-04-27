import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './CommonFilter.scss';

const CommonFilter = () => {
    const [open, setOpen] = useState(false);
    const [orderBy, setOrderBy] = useState('recomendados');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [sliderOne, setSliderOne] = useState(10);
    const [sliderTwo, setSliderTwo] = useState(30);
    const minGap = 1;

    useEffect(() => {
        console.log('hola guapi', open, orderBy, selectedSizes, selectedColors, sliderOne, sliderTwo);
        fillColor();
    }, [open, orderBy, selectedSizes, selectedColors, sliderOne, sliderTwo]);

    const slideOne = (newValue) => {
        const newSliderTwoValue = parseInt(sliderTwo);

        if (newSliderTwoValue - newValue <= minGap) {
            setSliderOne(newSliderTwoValue - minGap);
        } else if (newValue < 0) {
            setSliderOne(0);
        } else {
            setSliderOne(newValue);
        }
    };

    const slideTwo = (newValue) => {
        const newSliderOneValue = parseInt(sliderOne);

        if (newValue - newSliderOneValue <= minGap) {
            setSliderTwo(newSliderOneValue + minGap);
        } else if (newValue > 100) {
            setSliderTwo(100);
        } else {
            setSliderTwo(newValue);
        }
    };
    const fillColor = () => {
        let percent1 = (sliderOne / 100) * 100;
        let percent2 = (sliderTwo / 100) * 100;
        const sliderTrack = document.querySelector('.slider__track');
        if (sliderTrack) {
            sliderTrack.style.background = `linear-gradient(to right, #e7e8e9 ${percent1}%, rgb(165, 58, 69) ${percent1}%, rgb(165, 58, 69) ${percent2}%, #e7e8e9 ${percent2}%)`;
        }
    };

    const handleOrderByChange = (e) => {
        setOrderBy(e.target.value);
    };

    const handleSizeChange = (e) => {
        const size = e.target.value;
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(item => item !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    const handleColorChange = (e) => {
        const color = e.target.value;
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter(item => item !== color));
        } else {
            setSelectedColors([...selectedColors, color]);
        }
    };

    return (
        <div className='commonFilter-container'>
            <div className='commonFilter-title' onClick={() => setOpen(!open)}>
                <p>Filtrar y ordenar</p>
                {
                    !open ? <IoIosArrowDown className='commonFilter-icon' /> : <IoIosArrowUp className='commonFilter-icon' />
                }
            </div>
            {
                open ? (
                    <div className='commonFilter-mainContainer'>
                        <div className='commonFilter-valuesContainer'>
                            <div className='sizesFilter-container'>
                                <h3>Tallas</h3>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="xs" name="size" value="xs" checked={selectedSizes.includes('xs')} onChange={handleSizeChange} />
                                    <label htmlFor="xs">XS</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="s" name="size" value="s" checked={selectedSizes.includes('s')} onChange={handleSizeChange} />
                                    <label htmlFor="s">S</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="m" name="size" value="m" checked={selectedSizes.includes('m')} onChange={handleSizeChange} />
                                    <label htmlFor="m">M</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="l" name="size" value="l" checked={selectedSizes.includes('l')} onChange={handleSizeChange} />
                                    <label htmlFor="l">L</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="xl" name="size" value="xl" checked={selectedSizes.includes('xl')} onChange={handleSizeChange} />
                                    <label htmlFor="xl">XL</label>
                                </div>
                            </div>
                            <div className='colorsFilter-container'>
                                <h3>Colores</h3>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="white" name="color" value="white" checked={selectedColors.includes('white')} onChange={handleColorChange} />
                                    <label htmlFor="white">Blancos</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="black" name="color" value="black" checked={selectedColors.includes('black')} onChange={handleColorChange} />
                                    <label htmlFor="black">Negros</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="gray" name="color" value="gray" checked={selectedColors.includes('gray')} onChange={handleColorChange} />
                                    <label htmlFor="gray">Grises</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="brown" name="color" value="brown" checked={selectedColors.includes('brown')} onChange={handleColorChange} />
                                    <label htmlFor="brown">Marrones</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="green" name="color" value="green" checked={selectedColors.includes('green')} onChange={handleColorChange} />
                                    <label htmlFor="green">Verdes</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="red" name="color" value="red" checked={selectedColors.includes('red')} onChange={handleColorChange} />
                                    <label htmlFor="red">Rojos</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="blue" name="color" value="blue" checked={selectedColors.includes('blue')} onChange={handleColorChange} />
                                    <label htmlFor="blue">Azules</label>
                                </div>
                                <div className='filterInputs-container'>
                                    <input className='filter_inputCheckbox ' type="checkbox" id="beige" name="color" value="beige" checked={selectedColors.includes('beige')} onChange={handleColorChange} />
                                    <label htmlFor="beige">Beige</label>
                                </div>
                                {/* Agrega más colores según sea necesario */}
                            </div>
                            <div className='pricesFilter-container'>
                                <div className='pricesFilter-containerpt1'>
                                    <h3>Ordenar por</h3>
                                    <div className='pricesFilter_inputRadio__div'>
                                        <input className='filter_inputRadio' type="radio" id="recomendados" name="orderBy" value="recomendados" checked={orderBy === 'recomendados'} onChange={handleOrderByChange} />
                                        <label htmlFor="recomendados">Recomendados</label>
                                    </div>
                                    <div className='pricesFilter_inputRadio__div'>
                                        <input
                                            className='filter_inputRadio' type="radio" id="precioMayor" name="orderBy" value="precioMayor" checked={orderBy === 'precioMayor'} onChange={handleOrderByChange} />
                                        <label htmlFor="precioMayor">Precio: Mayor a menor</label>
                                    </div>
                                    <div className='pricesFilter_inputRadio__div'>
                                        <input
                                            className='filter_inputRadio' type="radio" id="precioMenor" name="orderBy" value="precioMenor" checked={orderBy === 'precioMenor'} onChange={handleOrderByChange} />
                                        <label htmlFor="precioMenor">Precio: Menor a mayor</label>
                                    </div>
                                </div>
                                <div className='pricesFilter-containerpt2'>
                                    <div className="input__range__values">
                                        <h3>Precio: <span className='range1'>{sliderOne ? sliderOne : 0}</span> -<span className='range2'> {sliderTwo ? sliderTwo : 100} </span>€</h3>
                                    </div>
                                    <div className="slider__track"></div>
                                    <input type="range" min="0" max="100" value={sliderOne} onChange={(e) => slideOne(parseInt(e.target.value))} className='slider__1' id='slider__1' />
                                    <input type="range" min="0" max="100" value={sliderTwo} onChange={(e) => slideTwo(parseInt(e.target.value))} className='slider__2' id='slider__2' />
                                </div>
                            </div>
                        </div>
                        <div className='filterButton'>
                            <button>Ver resultados</button>
                        </div>
                    </div>
                ) : null
            }
        </div >
    );
};

export default CommonFilter;
