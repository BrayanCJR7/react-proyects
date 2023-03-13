/*
export const Products = () => {
    const dataProducts = apiData.read();
    const location = useLocation();
    const [searchPro, setSearchPro] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [activeTab, setActiveTab] = useState('tab-1');
    const [see, setSee] = useState('');
    const [orderBy, setOrderBy] = useState('nuevo');
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [isVisible, setIsVisible] = useState(true);
    const [selectedFam, setSelectedFam] = useState('');
    const [searchLab, setSearchLab] = useState('');
    const [selectedLab, setSelectedLab] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState([]);
    const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);
    const characteristics = [
        {id: 1, checked: false, value: "prescripcion", label: "Prescripción médica"},
        {id: 2, checked: false, value: "antibiotico", label: "Antibiótico"},
        {id: 3, checked: false, value: "frio", label: "Conservación en frío"},
    ];
    const query = new URLSearchParams(useLocation().search);
    /!*Obtencion dato "Familia seleccionada"*!/
    const categoryLink = query.get("categoria");
    const categoryFooter = query.get("macroFamilia");

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setSearchPro(queryParams.get('search') || '');
        setSearchCategory(queryParams.get('category') || '');
    }, [location]);
    /!*------------------ Busqueda ------------------*!/
    /!*Ver*!/
    const handleSee = e => {
        setSee(e.target.value)
    }
    const handleOrderBy = event => {
        setOrderBy(event.target.value);
    };
    /!*------------------ Fin Busqueda ------------------*!/

    /!*------------------ Anidacion de filtros ------------------*!/
    const filterFusion = () => {
        let filteredProducts = dataProducts;

        /!*Busqueda Movil*!/
        if (searchPro || searchCategory) {
            filteredProducts = filteredProducts.filter(item => {
                const nombreMatches = item.pro_nombre.toLowerCase().includes(searchPro.toLowerCase());
                const categoryMatches = searchCategory ? item.pro_categorias && item.pro_categorias.some(categoria => categoria.macrofamilia === searchCategory) : true;
                return nombreMatches && categoryMatches;
            });
        }
        /!*CategoryNavLink*!/
        if (categoryLink !== null) {
            filteredProducts = filteredProducts.filter(articulo => {
                const categorias = articulo.pro_categorias || [];
                const categoriasConFamilia = categorias.filter(categoria => Array.isArray(categoria.Familia));
                return categoriasConFamilia.some(categoria => {
                    return categoria.Familia.some(fam => {
                        return fam.familia.trim() === categoryLink.trim();
                    });
                });
            });
        }
        /!*CategoryFooterLink*!/
        if (categoryFooter !== null) {
            filteredProducts = filteredProducts.filter(product =>
                product.pro_categorias && product.pro_categorias.some(category =>
                    category.macrofamilia === categoryFooter
                ));
        }
        /!*Ver*!/
        if (see === 'all') {
            filteredProducts = dataProducts;
        }
        /!*Order*!/
        if (orderBy === 'nuevo') {
            filteredProducts = filteredProducts.sort((a, b) => (new Date(b.pro_fecha) - new Date(a.pro_fecha)));
        }
        if (orderBy === 'A-Z') {
            filteredProducts = filteredProducts.sort((a, b) => (a.pro_nombre > b.pro_nombre ? 1 : -1));
        }
        if (orderBy === 'Z-A') {
            filteredProducts = filteredProducts.sort((a, b) => (a.pro_nombre < b.pro_nombre ? 1 : -1));
        }
        if (orderBy === 'antiguo') {
            filteredProducts = filteredProducts.sort((a, b) => (new Date(a.pro_fecha) - new Date(b.pro_fecha)))
        }

        filteredProducts = filteredProducts.filter(item => {
            return item.pro_laboratorio.toLowerCase().includes(searchLab.toLowerCase());
        });

        if (selectedFam.length > 0) {
            filteredProducts = filteredProducts.filter(item => {
                const categorias = item.pro_categorias || [];
                const categoriasConFamilia = categorias.filter(categoria => Array.isArray(categoria.Familia));
                const familias = categoriasConFamilia.flatMap(categoria => categoria.Familia.map(fam => fam.familia));
                return selectedFam.every(fam => familias.includes(fam));
            });
        }

        if (selectedLab.length > 0) {
            filteredProducts = filteredProducts.filter(item => {
                return selectedLab.some(lab => item.pro_laboratorio.includes(lab));
            });
        }

        if (selectedSpecies.length > 0) {
            filteredProducts = filteredProducts.filter(item => {
                return selectedSpecies.some(specie => item.pro_especies.includes(specie));
            });
        }

        if (selectedCharacteristics.length > 0) {
            filteredProducts = filteredProducts.filter(item => {
                return selectedCharacteristics.some(char => item.pro_caracteristicas && item.pro_caracteristicas.includes(char));
            });
        }

        return filteredProducts;
    }

    const filteredProducts = filterFusion();

    /!*------------------ Fin Anidacion de filtros ------------------*!/
    /!*------------------ Filtro por Familia ------------------*!/
    const familiasUnicas = {};

    dataProducts.forEach((product) => {
        if (product.pro_categorias) {
            product.pro_categorias.forEach((categoria) => {
                const macrofamilia = categoria.macrofamilia;
                const familia = categoria.Familia[0].familia;

                if (!familiasUnicas[macrofamilia]) {
                    familiasUnicas[macrofamilia] = {macrofamilia, familias: []};
                }

                if (!familiasUnicas[macrofamilia].familias.includes(familia)) {
                    familiasUnicas[macrofamilia].familias.push(familia);
                }
            });
        }
    });

    const handleFamSelected = (value) => {
        setSelectedFam(prevSpecies =>
            prevSpecies.includes(value)
                ? prevSpecies.filter(selectedValue => selectedValue !== value)
                : [...prevSpecies, value]
        );
    }
    /!*------------------ Fin Filtro por Familia ------------------*!/

    /!*------------------ Filtro por Lab ------------------*!/
    //Contando cuantos articulos hay con el mismo laboratorio.
    const labs = dataProducts.map((labs) => labs.pro_laboratorio).reduce((numLab, lab) => {
        numLab[lab] = (numLab[lab] || 0) + 1;
        return numLab
    }, {})

    const handleChange = (event) => {
        setSearchLab(event.target.value);
    }
    const handleLabSelected = (value) => {
        setSelectedLab(prevSpecies =>
            prevSpecies.includes(value)
                ? prevSpecies.filter(selectedValue => selectedValue !== value)
                : [...prevSpecies, value]
        );
    }
    /!*------------------ Fin Filtro por Lab ------------------*!/
    /!*------------------ Filtro por Especie ------------------*!/
    /!*Se escucha el evento de clic sobre la palabra y se guarda en un objeto las palabras seleccionadas*!/
    const handleSpeciesSelected = (value) => {
        setSelectedSpecies(prevSpecies =>
            prevSpecies.includes(value)
                ? prevSpecies.filter(selectedValue => selectedValue !== value)
                : [...prevSpecies, value]
        );
    };
    /!*se separan itera sobre la variable de especies y se obtienen las especies unicas*!/
    const Especie = new Set();
    filteredProducts.forEach(objeto => {
        const tag = objeto.pro_especies.split(",");
        tag.forEach(tag => {
            Especie.add(tag);
        });
    });
    const especieArray = Array.from(Especie);
    /!*------------------ Fin Filtro por Especie ------------------*!/
    /!*------------------ Filtro Caracteristicas ------------------*!/
    const handleSelectCharacteristic = (value) => {
        setSelectedCharacteristics(prevChar =>
            prevChar.includes(value)
                ? prevChar.filter(selectedValue => selectedValue !== value)
                : [...prevChar, value])
    }

    /!*------------------ Fin Filtro Caracteristicas ------------------*!/

    /!*------------------ Tab ------------------*!/
    const handleTabChange = (index) => {
        setActiveTab(index.currentTarget.id);
    }
    /!*------------------ Productos por pagina ------------------*!/
    useEffect(() => {
        if (window.innerWidth < 600) {
            setItemsPerPage(5);
        } else if (window.innerWidth < 992) {
            setIsVisible(false);
            setItemsPerPage(10);
        } else {
            setItemsPerPage(16);
        }
        setIsVisible(true);
    }, []);
    /!*------------------ Fin Productos por pagina ------------------*!/

    return (
        <>
            <MainContainer className="px-4">
                <Breadcrumb id={"Productos"}/>
                <div className="row">
                    <div className="col-lg-3 p-0">
                        <Containermenudos>
                            <div className="d-flex">
                                <TuneIcon style={{color: 'var(--first-color)'}}/>
                                <SpanFilter>Filtros</SpanFilter>
                            </div>
                            <div className="showDiv" role="button" onClick={() => setIsVisible(!isVisible)}>
                                <KeyboardArrowDownIcon style={{color: 'var(--first-color)'}}/>
                            </div>
                        </Containermenudos>
                        {isVisible && (
                            <div>
                                <Containermenu>
                                    <ContainerTitle>
                                        Macrofamilia
                                    </ContainerTitle>
                                    <ContainerElements>
                                        {Object.values(familiasUnicas).map(({macrofamilia, familias}) => (
                                            <Accordion className="accordion" key={macrofamilia}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content">
                                                    <span>{macrofamilia}</span>
                                                </AccordionSummary>
                                                {familias.map((familia) => (
                                                    <AccordionDetails key={familia}>
                                                        <AFiltros
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleFamSelected(familia);
                                                            }}
                                                            selected={selectedFam.includes(familia)}>
                                                            {familia}
                                                        </AFiltros>
                                                    </AccordionDetails>
                                                ))}
                                            </Accordion>
                                        ))}
                                    </ContainerElements>
                                </Containermenu>
                                <Containermenu>
                                    <ContainerTitle>
                                        Filtrar por
                                    </ContainerTitle>
                                    <ContainerElements>
                                        <Accordion className="accordion">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon/>}
                                                aria-controls="panel1a-content">
                                                <span>Laboratorio</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <ContainerBusqueda className="containerFilter align-items-center">
                                                    <InputSearch>
                                                        <input
                                                            placeholder="Buscar Laboratorio"
                                                            type="text"
                                                            value={searchLab}
                                                            onChange={handleChange}/>
                                                        <IconBusqueda role="button">
                                                            <SearchIcon className="searchIcon"/>
                                                        </IconBusqueda>
                                                    </InputSearch>
                                                </ContainerBusqueda>
                                                {Object.entries(labs).map(([item, value], index) => {
                                                    if (item !== "") {
                                                        return (
                                                            <ContainerFilterWord key={index}>
                                                                <AFiltros onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleLabSelected(item);
                                                                }}
                                                                          selected={selectedLab.includes(item)}>
                                                                    {item}
                                                                    <span>({value > 99 ? '+99' : value})</span>
                                                                </AFiltros>
                                                            </ContainerFilterWord>
                                                        )
                                                    }
                                                })}
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion className="accordion">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon/>}
                                                aria-controls="panel1a-content">
                                                <span>Especie</span>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <DivEspecies>
                                                    {especieArray.map(((link, index) => {
                                                        if (link !== "") {
                                                            return (
                                                                <AFiltros
                                                                    key={index}
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleSpeciesSelected(link);
                                                                    }}
                                                                    selected={selectedSpecies.includes(link)}>
                                                                    {link}
                                                                </AFiltros>
                                                            )
                                                        }
                                                    }))}
                                                </DivEspecies>
                                            </AccordionDetails>
                                        </Accordion>
                                    </ContainerElements>
                                </Containermenu>
                                <Containermenu>
                                    <ContainerTitle>
                                        Características
                                    </ContainerTitle>
                                    <ContainerElements>
                                        {characteristics.map((item, index) => (
                                            <div key={index} className="input-checkbox">
                                                <input
                                                    type="checkbox"
                                                    name="characteristics"
                                                    value={item.value}
                                                    id={item.id}
                                                    onChange={() => {
                                                        handleSelectCharacteristic(item.value);
                                                    }}
                                                />
                                                <label className="px-2" htmlFor={item.id}>{item.label}</label>
                                            </div>
                                        ))}
                                    </ContainerElements>
                                </Containermenu>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-9 p-0">
                        <ContenedorDescriptivo>
                            <OrderContainer className="col-lg-11">
                                <SelectContainer>
                                    <span>Ordenar por:</span>
                                    <div>
                                        <AOrdenar
                                            onChange={handleOrderBy}>
                                            <option value='nuevo'>Nuevo</option>
                                            <option value='A-Z'>Nombre, A a la Z</option>
                                            <option value='Z-A'>Nombre, Z a la A</option>
                                            <option value='antiguo'>Más antiguo</option>
                                        </AOrdenar>
                                    </div>
                                </SelectContainer>
                            </OrderContainer>
                            <ContainerOrder className="col-lg-1">
                                <SpanVerComo>Ver como:</SpanVerComo>
                                <ContainerBtn>
                                    <AccessStyle
                                        title="Cuadricula"
                                        id="tab-1"
                                        onClick={handleTabChange}
                                        className={`tab-button ${activeTab === 'tab-1' ? 'activeTab' : ''}`}>
                                        <GridViewIcon style={{fontSize: 45}}/>
                                    </AccessStyle>
                                    <AccessStyle
                                        title="Lista"
                                        id="tab-2"
                                        onClick={handleTabChange}
                                        className={`tab-button ${activeTab === 'tab-2' ? 'activeTab' : ''}`}>
                                        <ListAltIcon style={{fontSize: 45}}/>
                                    </AccessStyle>
                                </ContainerBtn>
                            </ContainerOrder>
                        </ContenedorDescriptivo>
                        <ContainerArticulos>
                            <ProductCardsGrid
                                activeTab={activeTab}
                                filteredProducts={filteredProducts}
                                itemsPerPage={itemsPerPage}/>
                            <ProductCardsList
                                activeTab={activeTab}
                                filteredProducts={filteredProducts}
                                itemsPerPage={itemsPerPage}/>
                        </ContainerArticulos>
                    </div>
                </div>

            </MainContainer>
        </>
    );
};*/
