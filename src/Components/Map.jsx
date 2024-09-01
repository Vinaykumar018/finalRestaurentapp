import React, { useEffect, useRef } from 'react';

const MyMapComponent = ({ onLocationSelect }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = () => {
            const map = new google.maps.Map(mapRef.current, {
                center: { lat: 17.448514697054215, lng: 78.35044544777438 },
                zoom: 12,
            });

            const marker = new google.maps.Marker({
                position: { lat: 17.448514697054215, lng: 78.35044544777438 },
                map,
                draggable: true,
            });

            google.maps.event.addListener(marker, 'dragend', (event) => {
                const position = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                };
                onLocationSelect(position);
            });
        };

        if (window.google) {
            initMap();
        } else {
            window.initMap = initMap;
        }
    }, [onLocationSelect]);

    return <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>;
};

export default MyMapComponent;
