export const registerFormControls = [
    {
        name: "userName",
        label: "User Name",
        placeholder: "Enter your user name",
        componentType: "input",
        type: "text",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
    },
];

export const loginFormControls = [
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
    },
];

export const addProductFormElements = [
    {
        label: "Title",
        name: "title",
        componentType: "input",
        type: "text",
        placeholder: "Enter product title",
    },
    {
        label: "Description",
        name: "description",
        componentType: "textarea",
        placeholder: "Enter product description",
    },
    {
        label: "Category",
        name: "category",
        componentType: "select",
        options: [
            {id: "LivingRoomFurniture", label: "Living Room"},
            {id: "BedroomFurniture", label: "Bedroom"},
            {id: "DiningRoomFurniture", label: "Dining Room"},
            {id: "OfficeFurniture", label: "Office"},
            {id: "OutdoorFurniture", label: "Outdoor"},
            {id: "Cabinet", label: "Cabinet"},
            {id: "Lighting", label: "Lighting"},
            {id: "DecorAccessories", label: "Decor & Accessories"},
            {id: "KidsFurniture", label: "Kids’"},
            {id: "EntrywayFurniture", label: "Entryway"},
        ],
    },
    {
        label: "Brand",
        name: "brand",
        componentType: "select",
        options: [
            {id: "IKEA", label: "IKEA"},
            {id: "ASHLEY", label: "ASHLEY"},
            {id: "BoConcept", label: "BoConcept"},
            {id: "RocheBobois", label: "Roche Bobois"},
            {id: "HermanMiller", label: "Herman Miller"},
            {id: "Cassina", label: "Cassina"},
        ],
    },
    {
        label: "Price",
        name: "price",
        componentType: "input",
        type: "number",
        placeholder: "Enter product price",
    },
    {
        label: "Sale Price",
        name: "salePrice",
        componentType: "input",
        type: "number",
        placeholder: "Enter sale price (optional)",
    },
    {
        label: "Total Stock",
        name: "totalStock",
        componentType: "input",
        type: "number",
        placeholder: "Enter total stock",
    },
];

export const shoppingViewHeaderMenuItems = [
    {id: "products", label: "Products", path: "/shop/listing",},
    {id: "LivingRoomFurniture", label: "Living Room", path: "/shop/listing",},
    {id: "BedroomFurniture", label: "Bedroom", path: "/shop/listing",},
    {id: "DiningRoomFurniture", label: "Dining Room", path: "/shop/listing",},
    {id: "OfficeFurniture", label: "Office", path: "/shop/listing",},
    {id: "OutdoorFurniture", label: "Outdoor", path: "/shop/listing",},
    {id: "Cabinet", label: "Cabinet", path: "/shop/listing",},
    {id: "Lighting", label: "Lighting", path: "/shop/listing",},
    {id: "DecorAccessories", label: "Decor & Accessories", path: "/shop/listing",},
    {id: "KidsFurniture", label: "Kids’", path: "/shop/listing",},
    {id: "EntrywayFurniture", label: "Entryway", path: "/shop/listing",},


    {id: "search", label: "Search", path: "/shop/search",},
];

export const categoryOptionsMap = {
    LivingRoomFurniture: "Living Room",
    BedroomFurniture: "Bedroom",
    DiningRoomFurniture: "Dining Room",
    OfficeFurniture: "Office",
    OutdoorFurniture: "Outdoor",
    Cabinet: "Cabinet",
    Lighting: "Lighting",
    DecorAccessories: "Decor&Accessories",
    KidsFurniture: "Kids’ ",
    EntrywayFurniture: "Entryway",
};

export const brandOptionsMap = {
    IKEA: "IKEA",
    ASHLEY: "ASHLEY",
    BoConcept: "BoConcept",
    RocheBobois: "Roche Bobois",
    HermanMiller: "Herman Miller",
    Cassina: "Cassina",
};

export const filterOptions = {
    category: [
        {id: "LivingRoomFurniture", label: "Living Room"},
        {id: "BedroomFurniture", label: "Bedroom"},
        {id: "DiningRoomFurniture", label: "Dining Room"},
        {id: "OfficeFurniture", label: "Office"},
        {id: "OutdoorFurniture", label: "Outdoor"},
        {id: "Cabinet", label: "Cabinet"},
        {id: "Lighting", label: "Lighting"},
        {id: "DecorAccessories", label: "Decor&Accessories"},
        {id: "KidsFurniture", label: "Kids’ "},
        {id: "EntrywayFurniture", label: "Entryway"},
    ],
    brand: [
        {id: "IKEA", label: "IKEA"},
        {id: "ASHLEY", label: "ASHLEY"},
        {id: "BoConcept", label: "BoConcept"},
        {id: "RocheBobois", label: "Roche Bobois"},
        {id: "HermanMiller", label: "Herman Miller"},
        {id: "Cassina", label: "Cassina"},
    ],
};

export const sortOptions = [
    {id: "price-lowtohigh", label: "Price: Low to High"},
    {id: "price-hightolow", label: "Price: High to Low"},
    {id: "title-atoz", label: "Title: A to Z"},
    {id: "title-ztoa", label: "Title: Z to A"},
];

export const addressFormControls = [
    {
        label: "Zipcode",
        name: "pincode",
        componentType: "input",
        type: "text",
        placeholder: "Enter your zipcode",
    },
    {
        label: "City",
        name: "city",
        componentType: "input",
        type: "text",
        placeholder: "Enter your city",
    },
    {
        label: "District",
        name: "district",
        componentType: "input",
        type: "text",
        placeholder: "Enter your district",
    },
    {
        label: "Ward",
        name: "ward",
        componentType: "input",
        type: "text",
        placeholder: "Enter your ward",
    },
    {
        label: "Street",
        name: "street",
        componentType: "input",
        type: "text",
        placeholder: "Enter your street",
    },
    {
        label: "House Number",
        name: "number",
        componentType: "input",
        type: "text",
        placeholder: "Enter your house number",
    },
    {
        label: "Address",
        name: "address",
        componentType: "input",
        type: "text",
        placeholder: "Enter your address",
    },
    {
        label: "Phone",
        name: "phone",
        componentType: "input",
        type: "text",
        placeholder: "Enter your phone number",
    },
    {
        label: "Notes",
        name: "notes",
        componentType: "textarea",
        placeholder: "Enter any additional notes",
    },
];
