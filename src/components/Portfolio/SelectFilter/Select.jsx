
import image1 from '../../../assets/images/gallery/image.webp';
import image2 from '../../../assets/images/gallery/image-2.webp';
import image3 from '../../../assets/images/gallery/image-3.webp';
import image4 from '../../../assets/images/gallery/image-4.webp';
import image5 from '../../../assets/images/gallery/image-5.webp';
import image6 from '../../../assets/images/gallery/image-6.webp';
import setinha from '../../../assets/icons/Setinha.svg'
import Close from '../../../assets/icons/closeMobile.svg'
import React, { useState, useLayoutEffect, useEffect } from "react";
import LoadingImage from '../Loading/Loading';
import Avatar from '../UIElement/Avatar';
import Backdrop from '../UIElement/Backdrop';
import CloseBox from '../UIElement/CloseBox';
import closeIcon from '../UIElement/close.svg';
import LoadingPhoto from '../Loading/LoadingPhoto';


// NewCheckBox with OptionsGroup

const CheckBoxSideBar = ({ title, options, selected, handleChange }) => {
  return (
    <div className='SideBarSelector'>
      <h3 className='SideBarTitle'>{title}</h3>
      {options.map((optionGroup, index) =>
        optionGroup.options ? (
          <div key={index}>
            <p className='CheckBoxGroupLabel'>{optionGroup.labelGroup}</p>
            {optionGroup.options.map((option) => (
              <div className='CheckBoxOption' key={option.value}>
                <input
                  className='CheckBoxInput'
                  value={selected}
                  type='checkbox'
                  id={option.id}
                  onChange={() => handleChange(option.value)}
                  checked={option.value === selected}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))}
          </div>
        ) : (
          <div className='CheckBoxOption' key={optionGroup.value}>
            <input
              className='CheckBoxInput'
              value={selected}
              type='checkbox'
              id={optionGroup.id}
              onChange={() => handleChange(optionGroup.value)}
              checked={optionGroup.value === selected}
            />
            <label htmlFor={optionGroup.value}>{optionGroup.label}</label>
          </div>
        )
      )}
      <div className='CheckBoxLine'></div>
    </div>
  );
};

//New Select with OptionGroup

const SelectPortFolio = ({ title, options, handleChange, selected }) => {
  return (
    <div className='portfolioSelector'>
      <h3 className='portfolioTitle'>{title}</h3>
      <select className='portfolioOption' onChange={handleChange} value={selected}>
        {options.map((optionGroup, index) =>
          optionGroup.options ? (
            <optgroup key={index} label={optionGroup.labelGroup}>
              {optionGroup.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={optionGroup.value} value={optionGroup.value}>
              {optionGroup.label}
            </option>
          )
        )}
      </select>
    </div>
  );
};




// Select Anterior ao optionGroup Preservado
// const SelectPortFolio = ({ title, options, handleChange, selected }) => {
//   return (
//     <div className='portfolioSelector'>
//       <h3 className='portfolioTitle'>{title}</h3>
//       <select className='portfolioOption' onChange={handleChange} value={selected}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// CheckBox Anterior ao optionGroup Preservado

// const CheckBoxSideBar = ({ title, options, selected, handleChange }) => {
//   return (
//     <div className='SideBarSelector'>
//       <h3 className='SideBarTitle'>{title}</h3>
//       {options.map((option) => (
//         <div className='CheckBoxOption' key={option.key}>
//           <input
//             className='CheckBoxInput'
//             value={selected}
//             type='checkbox'
//             id={option.id}
//             onChange={() => handleChange(option.value)}
//             checked={option.value === selected}
//           />
//           <label htmlFor={option.value}>{option.label}</label>
//         </div>
//       ))}
//       <div className='CheckBoxLine'></div>
//     </div>
//   );
// };

//Select
const Select = () => {

  const shop = [
    { label: 'Select an option', value: 'todos' },
    { label: 'Selden.Ink', value: 'seldenink' },
    { label: 'Loja2', value: 'loja2' },
  ];

  const skintone = [
    { label: 'Select an option', value: 'todos' },
    {
      labelGroup: '1 - Light/Pale',
      options: [
        { label: 'Lightest Tone', value: 'LightestTone' }
      ],
    },
    {
      labelGroup: '2 - White/Fair',
      options: [
        { label: 'Fair Skin', value: 'FairSkin' }
      ],
    },
    {
      labelGroup: '3 - Medium',
      options: [
        { label: 'Mid Skin Tone', value: 'MidSkinTone' }
      ],
    },
    {
      labelGroup: '4 - Olive',
      options: [
        { label: 'Moderate Brown', value: 'ModerateBrown' }
      ],
    },
    {
      labelGroup: '5 - Brown',
      options: [
        { label: 'Dark Brown', value: 'DarkBrown' }
      ],
    },
  ];
  const style = [

    { label: 'Select an option', value: 'todos' },
    { label: 'Hyperism', value: 'Hyperism' },
    { label: 'Color Realism', value: 'ColorRealism' },
    { label: 'Black and Grey Realism', value: ' Black and Grey Realism' },
    { label: 'Cover up', value: 'Cover up' },
    { label: 'Fixup', value: 'Fixup' },
    { label: 'Anime', value: 'Anime' },
    { label: 'Blackwork', value: ' Blackwork' },
    { label: 'Portrait', value: 'Portrait' },
    { label: 'Fine Line', value: 'Fine Line' },
    { label: 'Trash Polka', value: 'Trash Polka' },
    { label: 'Watercolor', value: ' Watercolor' },
    { label: 'Tribal ,Celtic and Maori', value: 'Tribal ,Celtic and Maori' },
    { label: 'Blackout', value: 'Blackout' },
    { label: 'American Traditional', value: 'American Traditional' },
    { label: 'Dotwork', value: 'Dotwork' },
    { label: 'Biomechanical', value: ' Biomechanical' },
    { label: 'Minimalist', value: 'Minimalist' },
    { label: 'Neo Traditional', value: 'Neo Traditional' },
    { label: 'New School', value: 'New School' },
    { label: 'Japanese', value: 'Japanese' },
    { label: 'Geometric', value: 'Geometric' },
    { label: 'Traditional/Old School', value: 'Traditional/Old School' },
    { label: 'Surrealism', value: 'Surrealism' },

  ];
  const placement = [
    { label: 'Select an option', value: 'todos' },
    {
      labelGroup: 'Back',
      options: [
        { label: 'Full Back', value: 'FullBack' },
        { label: 'Upper Back', value: 'UpperBack' },
        { label: 'Lower Back', value: 'LowerBack' },
      ]
    },
    {
      labelGroup: 'Front',
      options: [,
        { label: 'Full Front', value: 'FullFront' },
        { label: 'Chest', value: 'Chest' },
        { label: 'Face', value: 'Face' },
        { label: 'Neck', value: 'Neck' },
        { label: 'Ribs', value: 'Ribs' },
        { label: 'Stomach', value: 'Stomach' }
      ]
    },
    {
      labelGroup: 'Arm',
      options: [,
        { label: 'Full Arm', value: 'FullArm' },
        { label: 'Biceps', value: 'Biceps' },
        { label: 'Shoulder To Elbow', value: 'ShoulderToElbow' },
        { label: 'Triceps', value: 'Triceps' },
        { label: 'Back Forearm', value: 'BackForearm' },
        { label: 'Front Forearm', value: 'FrontForearm' },
        { label: 'Hands', value: 'Hands' }
      ]
    },
    {
      labelGroup: 'Leg',
      options: [,
        { label: 'Full Leg', value: 'FullLeg' },
        { label: 'Back Thigh', value: 'BackThigh' },
        { label: 'Front Thigh', value: 'FrontThigh' },
        { label: 'Inner Thigh', value: 'InnerThigh' },
        { label: 'Outer Thigh', value: 'OuterThigh' },
        { label: 'Calf', value: 'Calf' },
        { label: 'Calf Inner Side', value: 'CalfInnerSide' },
        { label: 'Calf Outer Side', value: 'CalfOuterSide' },
        { label: 'Foot', value: 'Foot' }
      ]
    }
  ];
  const size = [
    { label: 'Select an option', value: 'todos' },
    { label: 'Small', value: 'Small' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Large', value: 'Large' },
    { label: 'Extra Large', value: 'ExtraLarge' },
    { label: 'Full Sleeve', value: 'FullSleeve' },
  ];
  const artist = [
    { label: 'Select an option', value: 'todos' },
    {
      labelGroup: 'Resident',
      options: [
        { label: 'Luiz Lopes', value: 'LuizLopes' },
        { label: 'Bella', value: 'Bella' },
      ],
    },
    {
      labelGroup: 'Filtro Rewards',
      options: [
        { label: 'Tattoo conventions', value: 'Tattooconventions' },
        { label: 'Sponsored Equipment', value: 'Sponsoredequipment' },
        { label: 'Color Set', value: 'ColorSet' },
        { label: 'Magazines', value: 'Magazines' },
        { label: 'Certificates', value: 'Certificates' },
        { label: 'Masterclasses', value: 'Masterclasses' },
        { label: 'Recognition in Industry Publications', value: 'RecognitioninIndustryPublications' },
      ],
    },
    { label: 'Guest', value: 'Guest' }
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    shop: 'todos',
    skintone: 'todos',
    style: 'todos',
    placement: 'todos',
    size: 'todos',
    artist: 'todos',
  });

  const [isFilterModified, setIsFilterModified] = useState(false);
  const [isClearFiltersVisible, setIsClearFiltersVisible] = useState(true);


  // Funções de controle dos selects
  const handleExemplo0Change = (e) => {
    setSelectedFilters({ ...selectedFilters, shop: e.target.value });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleExemplo1Change = (e) => {
    setSelectedFilters({ ...selectedFilters, skintone: e.target.value });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };
  const handleExemplo2Change = (e) => {
    setSelectedFilters({ ...selectedFilters, style: e.target.value });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleExemplo3Change = (e) => {
    setSelectedFilters({ ...selectedFilters, placement: e.target.value });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleExemplo4Change = (e) => {
    setSelectedFilters({ ...selectedFilters, size: e.target.value });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleExemplo5Change = (e) => {
    setSelectedFilters({ ...selectedFilters, artist: e.target.value });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  // Funções de controle dos CheckBox
  const handleCheckBox0Change = (selectedSkinTone) => {
    setSelectedFilters({ ...selectedFilters, shop: selectedSkinTone });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleCheckBox1Change = (selectedSkinTone) => {
    setSelectedFilters({ ...selectedFilters, skintone: selectedSkinTone });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleCheckBox2Change = (selectedStyle) => {
    setSelectedFilters({ ...selectedFilters, style: selectedStyle });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleCheckBox3Change = (selectedPlacement) => {
    setSelectedFilters({ ...selectedFilters, placement: selectedPlacement });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleCheckBox4Change = (selectedSize) => {
    setSelectedFilters({ ...selectedFilters, size: selectedSize });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };

  const handleCheckBox5Change = (selectedArtist) => {
    setSelectedFilters({ ...selectedFilters, artist: selectedArtist });
    setIsFilterModified(true);
    setIsClearFiltersVisible(true);
  };


  const [flickrImages, setFlickrImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoadingImages, setIsLoadingImages] = useState(false);

  useLayoutEffect(() => {
    setIsLoadingImages(true);
    // fetch('https://seldenink-backend.onrender.com/flickr/photos/new')
    fetch('https://seldenink-backend.onrender.com/flickr/photos')
      .then(resp => resp.json())
      .then(data => {
        setFlickrImages(data);
        setLoading(false);
        setIsLoadingImages(false);
      }).catch(err => console.error(err))
  }, []);


  // Constante utilizada para uso de imagens so no Front-end

  const loadImages = [
    {
      id: 1,
      image: image1,
      alt: 'Image tattoo 1',
      skintone: 'I',
      style: 'Color Realism',
      placement: 'Leg',
      size: 'Medium',
      artist: 'Bella'
    },
    {
      id: 2,
      image: image2,
      alt: 'Image tattoo 2',
      skintone: 'II',
      style: 'Black & Grey Realism',
      placement: 'Leg',
      size: 'Sleeve',
      artist: 'Luiz'
    },
    {
      id: 3,
      image: image3,
      alt: 'Image tattoo 3',
      skintone: 'I',
      style: 'Color Realism',
      placement: 'Arm',
      size: 'Medium',
      artist: 'Bella'
    },
    {
      id: 4,
      image: image4,
      alt: 'Image tattoo 4',
      skintone: 'I',
      style: 'Black & Grey Realism',
      placement: 'Arm',
      size: 'Sleeve',
      artist: 'Luiz'
    },
    {
      id: 5,
      image: image5,
      alt: 'Image tattoo 5',
      skintone: 'II',
      style: 'Portrait',
      placement: 'Leg',
      size: 'Large',
      artist: 'Luiz'
    },
    {
      id: 6,
      image: image6,
      alt: 'Image tattoo 6',
      skintone: 'II',
      style: 'Portrait',
      placement: 'Arm',
      size: 'Large',
      artist: 'Bella'
    }
  ];


  const filteredImages = !loading ? flickrImages.filter(image => (
    (selectedFilters.shop === 'todos' || image?.tags?.toLowerCase().includes(selectedFilters.shop.toLowerCase())) &&
    (selectedFilters.skintone === 'todos' || image?.tags?.toLowerCase().includes(selectedFilters.skintone.toLowerCase())) &&
    (selectedFilters.style === 'todos' || image?.tags?.toLowerCase().includes(selectedFilters.style.toLowerCase())) &&
    (selectedFilters.placement === 'todos' || image?.tags?.toLowerCase().includes(selectedFilters.placement.toLowerCase())) &&
    (selectedFilters.size === 'todos' || image?.tags?.toLowerCase().includes(selectedFilters.size.toLowerCase())) &&
    (selectedFilters.artist === 'todos' || image?.tags?.toLowerCase().includes(selectedFilters.artist.toLowerCase()))
  )) : [];

  //Ao escolher a Opção SelectAnOption ele resetará tudo

  const areAllOptionsCleared =
    selectedFilters.shop === shop[0].value &&
    selectedFilters.skintone === skintone[0].value &&
    selectedFilters.style === style[0].value &&
    selectedFilters.placement === placement[0].value &&
    selectedFilters.size === size[0].value &&
    selectedFilters.artist === artist[0].value;


  // Limpeza de todos os Filtros

  const handleClearFilters = () => {
    setSelectedFilters({
      shop: shop[0].value,
      skintone: skintone[0].value,
      style: style[0].value,
      placement: placement[0].value,
      size: size[0].value,
      artist: artist[0].value,
    });

    setIsFilterModified(false);
    setIsClearFiltersVisible(false);
    document.querySelectorAll('.portfolioOption').forEach((select) => {
      select.value = select.options[0].value;
    });
    document.querySelectorAll('.CheckBoxInput').forEach((input) => {
      input.checked = false;
    });
  };

  //Ativação do SideBar

  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };


  // States Necessarios para Mudança de Fotos LightBox

  const [photos, setPhotos] = useState(null);
  const [showLightBox, setShowLightBox] = useState(false);
  const [photoIdLightBox, setPhotoIdLightBox] = useState(null);

  // Constantes para as Animações Ligthbox

  const [activeImageIndex, setActiveImageIndex] = useState(null);
  // const [showLightboxSpinner, setShowLightboxSpinner] = useState(false);


  //Constate para Mostrar LightBox
  const showPhotoLightbox = (event, photoId) => {
    filteredImages?.map(photo => {
      if (photo.id == photoId) {
        event.currentTarget.classList.remove('avatar-image');
        event.currentTarget.classList.add('avatar');
        setShowLightBox(true);
        setPhotoIdLightBox(photoId);
        setActiveImageIndex(index);
        // setShowLightboxSpinner(true);
      }
    })
  }

  //Constate para Fechar LightBox

  const closeLightboxHandler = (event) => {
    setShowLightBox(false);
    filteredImages?.map(photo => {
      if (photo.id === photoIdLightBox) {
        const image = document.getElementById(`${photo.id}`);
        image.classList.remove('avatar');
        image.classList.add('avatar-image');
        setShowLightboxSpinner(false);
      }
    });
  };

  
  return (
    <>

      {/* efeitoPenumbra */}

      {window.innerWidth <= 1024 && showSidebar && (
        <div className="overlay" onClick={handleSidebarToggle} />
      )}
      <div className='Select_Field'>
        <SelectPortFolio title='Shop' options={shop} handleChange={handleExemplo0Change} />
        <SelectPortFolio title='Size' options={size} handleChange={handleExemplo4Change} />
        <SelectPortFolio title='Placement' options={placement} handleChange={handleExemplo3Change} />
        <SelectPortFolio title='Style' options={style} handleChange={handleExemplo2Change} />
        <SelectPortFolio title='Skin Tone (What is my skin tone?)' options={skintone} handleChange={handleExemplo1Change} />
        <SelectPortFolio title='Artist' options={artist} handleChange={handleExemplo5Change} />
      </div>
      <div className='Btn_select_Up'>
        {isFilterModified && isClearFiltersVisible && !areAllOptionsCleared && (
          <div className='btn_select_Clear'>
            <img src={Close} alt='imagemClose' width={14}></img>
            <p className='detail-schedule_clear' onClick={handleClearFilters}>Clear Filters</p>
          </div>
        )}
      </div>

      {/* SideBar */}

      {window.innerWidth <= 1024 ? (
        <>
          <div className='Btn_SideBar_Filter'>
            <div className='btn-SideBar-Filter' onClick={handleSidebarToggle}>
              <p className='SideBar_Filter'>Filter Tattoos</p>
              <img src={setinha} alt="setinha" className='SideBar_Arrow' />
            </div>
            {isFilterModified && isClearFiltersVisible && !areAllOptionsCleared && (
              <div className='btn_select_Clear_SideBar'>
                <img src={Close} alt='imagemClose' width={14} className='imgClose'></img>
                <p className='detail-schedule_clear-sidebar' onClick={handleClearFilters}>Clear Filters</p>
              </div>
            )}
          </div>

          {/* Conditionally render the Sidebar */}

          {showSidebar && (
            <div className={`sidebar ${showSidebar ? 'open' : ''}`}>
              <div className='BodySideBar'>
                <div className='sideBarTitleOpen'>
                  <h2 className='TitleFilter'>Filters</h2>
                  <p className={`close-btn`} onClick={handleSidebarToggle}>
                    <img src={Close} alt='Img_Close' />
                  </p>
                </div>
                <CheckBoxSideBar
                  title='Shop'
                  options={shop}
                  selected={selectedFilters.shop}
                  handleChange={handleCheckBox0Change}
                />
                <CheckBoxSideBar
                  title='Skin Tone (What is my skin tone?)'
                  options={skintone}
                  selected={selectedFilters.skintone}
                  handleChange={handleCheckBox1Change}
                />
                <CheckBoxSideBar
                  title='Style'
                  options={style}
                  selected={selectedFilters.style}
                  handleChange={handleCheckBox2Change}
                />
                <CheckBoxSideBar
                  title='Placement'
                  options={placement}
                  selected={selectedFilters.placement}
                  handleChange={handleCheckBox3Change}
                />
                <CheckBoxSideBar
                  title='Size'
                  options={size}
                  selected={selectedFilters.size}
                  handleChange={handleCheckBox4Change}
                />
                <CheckBoxSideBar
                  title='Artist'
                  options={artist}
                  selected={selectedFilters.artist}
                  handleChange={handleCheckBox5Change}
                />
              </div>
            </div>
          )}
        </>
      ) : null}
      
      <>

        {showLightBox && <Backdrop className="backdrop" onClick={closeLightboxHandler } />}

        {
          isLoadingImages ? (

            <LoadingImage />

          ) : (

            <div
              className={`lightbox-container ${showLightBox ? 'active' : ''}`}>
              <div className='lightbox-content'></div>
              <div className='select_gallery__container'>
                {filteredImages && filteredImages.length > 0 ? (
                  filteredImages.map(image => (
                    <figure className='gallery__image-item' key={image.id}>
                        <div className='image-container' >
                            <Avatar
                              key={image.id}
                              id={image.id}
                              className={`avatar-image`}
                              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                              alt="Random Image"
                              onClick={(event) => { showPhotoLightbox(event, image.id) }}
                            />
                          {showLightBox && (
                            <CloseBox className='closeLightBox' src={Close} alt='Close the lightbox Option' onClick={closeLightboxHandler} key={image.id} />
                          )}
                        </div>
                    </figure>
                  ))

                ) : (

                  <div className='Msg_Error_P'>
                    <p>No images found for the selected filter. Please try another or check back later for updates..</p>
                  </div>

                )}
              </div>
            </div>

          )
        }
      </>

      {/* Fim da Galeria de Imagem */}

      {/* Btn Finais */}
      <div className='Btn_select'>
        {isFilterModified && isClearFiltersVisible && !areAllOptionsCleared && (
          <div className='btn_select_Clear'>
            <img src={Close} alt='imagemClose' width={14}></img>
            <p className='detail-schedule_clear' onClick={handleClearFilters}>Clear Filters</p>
          </div>
        )}
        <button className='detail-schedule'>Book Now</button>
      </div>
    </>
  );
};

export default Select;