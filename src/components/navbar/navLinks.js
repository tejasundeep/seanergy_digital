const navLinks = [
    { text: 'Home', href: '/' },
    {
        text: 'Corporate',
        dropdownItems: [
            { text: 'About Us', href: 'about' },
            { text: 'Careers', href: 'Careers' },
            { text: 'Events', href: 'Events' },
        ],
    },
    {
        text: 'Industries',
        dropdownItems: [
            { text: 'Transportation', href: 'Transportation' },
            { text: 'Logistics & Supply Chain', href: 'Logistics' },
            { text: 'Healthcare', href: 'Healthcare' },
            { text: 'Offshore Product Development', href: 'Productdevelopment' },
        ],
    },
    {
        text: 'Services',
        dropdownItems: [
            { text: 'Digital Transformation', href: 'DigitalTransformation' },
            { text: 'Data and Analytics', href: 'DataandAnalytics' },
            { text: 'Cognitive Abilities', href: 'CognitiveAbilities' },
            { text: 'Quality Assurance', href: 'QualityAssurance' },
        ],
    },
    {
        text: 'Products',
        dropdownItems: [
            { text: 'Umansys', href: 'Umansys' },
            { text: 'UGetHelp', href: 'UGetHelp' },
            { text: 'Uniview', href: 'Uniview' },
        ],
    },
    { text: 'Contact', href: 'Contact' },
];

export default navLinks;
