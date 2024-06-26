import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgEye = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="-"
        height="-"
        fill="none"
        viewBox="0 0 20 20"
        {...props}>
        <Path
            fill="#1C1F1E"
            d="M19.61 9.617a11.704 11.704 0 0 0-2.227-3.094C15.359 4.508 12.813 3.438 10 3.438c-2.813 0-5.36 1.07-7.383 3.085A11.703 11.703 0 0 0 .391 9.617a1 1 0 0 0 0 .766 11.704 11.704 0 0 0 2.226 3.094c2.024 2.015 4.57 3.085 7.383 3.085 2.813 0 5.36-1.07 7.383-3.085a11.705 11.705 0 0 0 2.226-3.094 1 1 0 0 0 0-.766Zm-3.602 2.578c-1.672 1.657-3.695 2.492-6.008 2.492s-4.336-.835-6.008-2.492A10.266 10.266 0 0 1 2.305 10a10.07 10.07 0 0 1 1.687-2.195C5.664 6.148 7.688 5.313 10 5.313c2.313 0 4.336.835 6.008 2.492.659.652 1.227 1.39 1.687 2.195a10.266 10.266 0 0 1-1.687 2.195ZM10 6.562a3.438 3.438 0 1 0 0 6.876 3.438 3.438 0 0 0 0-6.876Zm0 5A1.562 1.562 0 1 1 11.563 10 1.57 1.57 0 0 1 10 11.563Z"
        />
    </Svg>
);
export default SvgEye;
