const ImageBlob = ({ color1, color2 }) => {
  return (
    <svg viewBox='0 0 1000 1000'>
      <defs>
        <linearGradient
          id='linearGradientId'
          gradientTransform='rotate(0 0.5 0.5)'
        >
          <stop offset='0%' stop-color={color1} />
          <stop offset='100%' stop-color={color2} />
        </linearGradient>
        <clipPath id='shape'>
          <path
            fill='currentColor'
            d='M854,592.5Q755,685,665.5,709Q576,733,505,718.5Q434,704,400,651Q366,598,308.5,549Q251,500,232.5,396Q214,292,305,236.5Q396,181,518.5,123Q641,65,772,136Q903,207,928,353.5Q953,500,854,592.5Z'
          ></path>
        </clipPath>
      </defs>
      <g clip-path='url(#shape)'>
        <path
          fill='url(#linearGradientId)'
          d='M854,592.5Q755,685,665.5,709Q576,733,505,718.5Q434,704,400,651Q366,598,308.5,549Q251,500,232.5,396Q214,292,305,236.5Q396,181,518.5,123Q641,65,772,136Q903,207,928,353.5Q953,500,854,592.5Z'
        />
      </g>
    </svg>
  );
};

export default ImageBlob;
