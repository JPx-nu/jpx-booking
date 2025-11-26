export type Language = 'sv' | 'en';

export const translations = {
    sv: {
        nav: {
            home: 'Hem',
            treatments: 'Behandlingar',
            about: 'Om Oss',
            contact: 'Kontakt',
            book: 'Boka Tid',
            selectTheme: 'Välj Tema',
        },
        contact: {
            title: 'Kontakta Oss',
            subtitle: 'Vi finns här för dig. Hör av dig om du har frågor eller funderingar.',
            findUs: 'Hitta hit',
            addressTitle: 'Adress',
            address1: 'Nordengatan 1E',
            address2: 'City Center',
            addressNote: 'Bekvämt beläget med gott om parkeringsplatser i närheten.',
            getInTouch: 'Hör av dig',
            phone: 'Telefon',
            email: 'E-post',
            hours: 'Öppettider',
            monSat: 'Måndag - Lördag',
            sunday: 'Söndag',
            closed: 'Stängt',
            bookingNote: '* Öppet alla dagar efter tidsbokning.',
        },
        home: {
            heroTitle: 'Skönhetssalong',
            heroSubtitle: 'Din fristad för naglar, fransar och skönhet.',
            heroSubtitleItalic: 'Upplev lyx i varje detalj.',
            premiumService: 'Premium Skönhetsvård',
            bookNow: 'Boka Tid',
            ourServices: 'Våra Behandlingar',
            readMore: 'Läs Mer',
            features: {
                expert: {
                    title: 'Expert Stylister',
                    desc: 'Högt utbildade proffs dedikerade till perfektion.'
                },
                products: {
                    title: 'Premium Produkter',
                    desc: 'Vi använder endast de finaste, branschledande märkena.'
                },
                atmosphere: {
                    title: 'Avkopplande Atmosfär',
                    desc: 'Ta en paus från den stressiga vardagen i vår lugna studio.'
                }
            },
            services: {
                title: 'Våra Behandlingar',
                subtitle: 'Upptäck vårt utbud av exklusiva behandlingar designade för att framhäva din naturliga skönhet.',
                nails: {
                    title: 'Naglar',
                    desc: 'Manikyr, förlängning och design av högsta klass.'
                },
                lashes: {
                    title: 'Fransar',
                    desc: 'Volym, singel och lashlift för en intensiv blick.'
                },
                brows: {
                    title: 'Bryn',
                    desc: 'Formning och färgning som ramar in ditt ansikte.'
                },
                viewAll: 'Se alla behandlingar'
            },
            cta: {
                title: 'Redo för en förändring?',
                subtitle: 'Boka din tid idag och låt oss ta hand om dig. Vi garanterar en upplevelse utöver det vanliga.',
                button: 'Boka Tid Nu'
            }
        },
        treatments: {
            title: 'Våra Behandlingar',
            subtitle: 'Vi erbjuder ett brett utbud av skönhetsbehandlingar. Hitta det som passar dig bäst och boka din tid idag.',
            categories: {
                nails: {
                    title: 'Naglar',
                    desc: 'Handvård och nagelförlängning av högsta kvalitet.',
                    items: {
                        gellack: { name: 'Gellack', desc: 'Permanent lackning som håller i 3-4 veckor.' },
                        gellackRefill: { name: 'Gellack Återbesök', desc: 'Borttagning av gammalt material och ny lackning.' },
                        reinforce: { name: 'Nagelförstärkning Naturell/Färg', desc: 'Förstärkning av egen nagel.' },
                        reinforceMaster: { name: 'Nagelförstärkning MASTER', desc: 'Avancerad förstärkning hos Master Stylist.' },
                        extensionNatural: { name: 'Nagelförlängning Naturell', desc: 'Förlängning med mall eller tipp.' },
                        extensionColor: { name: 'Nagelförlängning Färg/Glitter', desc: 'Förlängning med valfri färg eller glitter.' },
                        extensionFrench: { name: 'Nagelförlängning Fransk/Ombre', desc: 'Klassisk fransk eller trendig ombre.' },
                        refillNatural: { name: 'Återbesök Naturell', desc: 'Påfyllning av utväxt.' },
                        refillColor: { name: 'Återbesök Färg/Glitter', desc: 'Påfyllning med ny design.' },
                        nailArtSimple: { name: 'Nail Art (Enkel)', desc: 'Enklare dekor på 1-2 naglar.', price: 'Ingår' },
                        nailArtAdvanced: { name: 'Nail Art (Avancerad)', desc: 'Handmålad design eller stenar.' },
                    }
                },
                lashes: {
                    title: 'Fransar & Bryn',
                    desc: 'Rama in ditt ansikte med perfekta fransar och bryn.',
                    items: {
                        lashlift: { name: 'Lashlift inkl. färg & keratin', desc: 'Permanent böjning av egna fransar.' },
                        browlift: { name: 'Browlift inkl. färg & keratin', desc: 'Formning och lyft av ögonbryn.' },
                        combo: { name: 'Kombo Lashlift & Browlift', desc: 'Det ultimata lyftet för hela ansiktet.' },
                        tintLashes: { name: 'Färgning av Fransar', desc: '' },
                        tintBrows: { name: 'Färgning & Formning av Bryn', desc: '' },
                        volumeNew: { name: 'Volymfransar Nytt Set', desc: 'Fylliga, dramatiska fransar.' },
                        volumeRefill: { name: 'Volymfransar Påfyllning', desc: 'Inom 3-4 veckor.' },
                        singleNew: { name: 'Singelfransar Nytt Set', desc: 'Naturligt resultat, en frans per egen frans.' },
                        singleRefill: { name: 'Singelfransar Påfyllning', desc: 'Inom 3-4 veckor.' },
                    }
                },
                makeup: {
                    title: 'Makeup & Övrigt',
                    desc: 'För speciella tillfällen eller vardagslyx.',
                    items: {
                        party: { name: 'Festmakeup', desc: 'Hållbar makeup för fest och event.' },
                        bridal: { name: 'Brudmakeup', desc: 'Inklusive konsultation.' },
                        piercing: { name: 'Håltagning Öron (per hål)', desc: 'Säkert och sterilt.' },
                        toothGem: { name: 'Tandsmycke', desc: 'Swarovski-kristall.' },
                    }
                }
            },
            cta: {
                title: 'Hittat något du gillar?',
                button: 'Boka Tid Nu'
            }
        },
        about: {
            title: 'Om Oss',
            subtitle: 'Mer än bara en skönhetssalong.',
            philosophy: {
                title: 'Vår Filosofi',
                text1: 'Skönhetssalong grundades med visionen att skapa en plats där kvalitet, lyx och personlig service möts. Vi tror att skönhet handlar om mer än bara yta – det handlar om hur du känner dig.',
                text2: 'Vårt team består av passionerade stylister som ständigt vidareutbildar sig för att kunna erbjuda de senaste teknikerna och trenderna inom naglar, fransar och hudvård.',
                button: 'Kontakta Oss'
            },
            team: 'Teamet',
            stats: {
                years: { number: '5+', label: 'År i branschen' },
                clients: { number: '1000+', label: 'Nöjda kunder' },
                certified: { number: '100%', label: 'Certifierade' },
                rating: { number: '4.9', label: 'Betyg' }
            }
        },
        footer: {
            brand: 'Skönhetssalong',
            aboutText: 'Din destination för premium skönhetsbehandlingar. Vi specialiserar oss på naglar, fransar och personlig vård.',
            contactTitle: 'Kontakta Oss',
            location: 'Centralt Läge',
            location2: 'City Center',
            hoursTitle: 'Öppettider',
            monSat: 'Måndag - Lördag',
            sunday: 'Söndag',
            closed: 'Stängt',
            bookingNote: '* Öppet alla dagar efter tidsbokning.',
            rights: 'Alla rättigheter förbehållna.',
            privacy: 'Integritetspolicy',
            terms: 'Användarvillkor'
        }
    },
    en: {
        nav: {
            home: 'Home',
            treatments: 'Treatments',
            about: 'About Us',
            contact: 'Contact',
            book: 'Book Now',
            selectTheme: 'Select Theme',
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'We are here for you. Get in touch if you have any questions or concerns.',
            findUs: 'Find Us',
            addressTitle: 'Address',
            address1: 'Nordengatan 1E',
            address2: 'City Center',
            addressNote: 'Conveniently located with ample parking nearby.',
            getInTouch: 'Get in Touch',
            phone: 'Phone',
            email: 'Email',
            hours: 'Opening Hours',
            monSat: 'Monday - Saturday',
            sunday: 'Sunday',
            closed: 'Closed',
            bookingNote: '* Open all days by appointment.',
        },
        home: {
            heroTitle: 'Beauty Salon',
            heroSubtitle: 'Your sanctuary for nails, lashes, and beauty.',
            heroSubtitleItalic: 'Experience luxury in every detail.',
            premiumService: 'Premium Beauty Services',
            bookNow: 'Book Now',
            ourServices: 'Our Treatments',
            readMore: 'Read More',
            features: {
                expert: {
                    title: 'Expert Stylists',
                    desc: 'Highly trained professionals dedicated to perfection.'
                },
                products: {
                    title: 'Premium Products',
                    desc: 'We use only the finest, industry-leading brands.'
                },
                atmosphere: {
                    title: 'Relaxing Atmosphere',
                    desc: 'Take a break from the busy world in our calm studio.'
                }
            },
            services: {
                title: 'Our Treatments',
                subtitle: 'Discover our range of exclusive treatments designed to highlight your natural beauty.',
                nails: {
                    title: 'Nails',
                    desc: 'Manicure, extensions, and design of the highest class.'
                },
                lashes: {
                    title: 'Lashes',
                    desc: 'Volume, single, and lash lift for an intense look.'
                },
                brows: {
                    title: 'Brows',
                    desc: 'Shaping and tinting that frames your face.'
                },
                viewAll: 'View all treatments'
            },
            cta: {
                title: 'Ready for a change?',
                subtitle: 'Book your appointment today and let us take care of you. We guarantee an experience beyond the ordinary.',
                button: 'Book Now'
            }
        },
        treatments: {
            title: 'Our Treatments',
            subtitle: 'We offer a wide range of beauty treatments. Find what suits you best and book your appointment today.',
            categories: {
                nails: {
                    title: 'Nails',
                    desc: 'Hand care and nail extensions of the highest quality.',
                    items: {
                        gellack: { name: 'Gel Polish', desc: 'Permanent polish that lasts 3-4 weeks.' },
                        gellackRefill: { name: 'Gel Polish Refill', desc: 'Removal of old material and new polish.' },
                        reinforce: { name: 'Nail Reinforcement Natural/Color', desc: 'Reinforcement of own nail.' },
                        reinforceMaster: { name: 'Nail Reinforcement MASTER', desc: 'Advanced reinforcement by Master Stylist.' },
                        extensionNatural: { name: 'Nail Extension Natural', desc: 'Extension with form or tip.' },
                        extensionColor: { name: 'Nail Extension Color/Glitter', desc: 'Extension with optional color or glitter.' },
                        extensionFrench: { name: 'Nail Extension French/Ombre', desc: 'Classic French or trendy ombre.' },
                        refillNatural: { name: 'Refill Natural', desc: 'Refill of outgrowth.' },
                        refillColor: { name: 'Refill Color/Glitter', desc: 'Refill with new design.' },
                        nailArtSimple: { name: 'Nail Art (Simple)', desc: 'Simple decor on 1-2 nails.', price: 'Included' },
                        nailArtAdvanced: { name: 'Nail Art (Advanced)', desc: 'Hand-painted design or stones.' },
                    }
                },
                lashes: {
                    title: 'Lashes & Brows',
                    desc: 'Frame your face with perfect lashes and brows.',
                    items: {
                        lashlift: { name: 'Lash Lift incl. tint & keratin', desc: 'Permanent curling of own lashes.' },
                        browlift: { name: 'Brow Lift incl. tint & keratin', desc: 'Shaping and lifting of eyebrows.' },
                        combo: { name: 'Combo Lash Lift & Brow Lift', desc: 'The ultimate lift for the entire face.' },
                        tintLashes: { name: 'Eyelash Tinting', desc: '' },
                        tintBrows: { name: 'Brow Tinting & Shaping', desc: '' },
                        volumeNew: { name: 'Volume Lashes New Set', desc: 'Full, dramatic lashes.' },
                        volumeRefill: { name: 'Volume Lashes Refill', desc: 'Within 3-4 weeks.' },
                        singleNew: { name: 'Single Lashes New Set', desc: 'Natural result, one lash per own lash.' },
                        singleRefill: { name: 'Single Lashes Refill', desc: 'Within 3-4 weeks.' },
                    }
                },
                makeup: {
                    title: 'Makeup & Other',
                    desc: 'For special occasions or everyday luxury.',
                    items: {
                        party: { name: 'Party Makeup', desc: 'Long-lasting makeup for parties and events.' },
                        bridal: { name: 'Bridal Makeup', desc: 'Including consultation.' },
                        piercing: { name: 'Ear Piercing (per hole)', desc: 'Safe and sterile.' },
                        toothGem: { name: 'Tooth Gem', desc: 'Swarovski crystal.' },
                    }
                }
            },
            cta: {
                title: 'Found something you like?',
                button: 'Book Now'
            }
        },
        about: {
            title: 'About Us',
            subtitle: 'More than just a beauty salon.',
            philosophy: {
                title: 'Our Philosophy',
                text1: 'Beauty Salon was founded with the vision of creating a place where quality, luxury, and personal service meet. We believe that beauty is about more than just appearance – it is about how you feel.',
                text2: 'Our team consists of passionate stylists who constantly educate themselves to offer the latest techniques and trends in nails, lashes, and skincare.',
                button: 'Contact Us'
            },
            team: 'The Team',
            stats: {
                years: { number: '5+', label: 'Years in business' },
                clients: { number: '1000+', label: 'Happy clients' },
                certified: { number: '100%', label: 'Certified' },
                rating: { number: '4.9', label: 'Rating' }
            }
        },
        footer: {
            brand: 'Beauty Salon',
            aboutText: 'Your destination for premium beauty treatments. We specialize in nails, lashes, and personalized care.',
            contactTitle: 'Contact Us',
            location: 'Central Location',
            location2: 'City Center',
            hoursTitle: 'Opening Hours',
            monSat: 'Monday - Saturday',
            sunday: 'Sunday',
            closed: 'Closed',
            bookingNote: '* Open all days by appointment.',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
        }
    }
};
