import React from 'react';
import { useTranslation } from "react-i18next";

// Asset Imports
import Service1 from '../assets/image13.webp'
import Service2 from '../assets/image3.webp'
import Service3 from '../assets/image15.webp'
import Service4 from '../assets/image16.webp'
import Service5 from '../assets/image14.webp'
import Service6 from '../assets/image4.webp'
import Service9 from '../assets/image2.webp'
import Service10 from '../assets/image1.webp'
import Service11 from '../assets/image11.webp'
import Service12 from '../assets/image12.webp'
import Service13 from '../assets/image20.webp'
export default function Services() {
  const { t } = useTranslation();

  const servicesData = [
    {
      id: 1,
      title: t("metalConstruction"),
      description: t("metalConstructionDesc"),
      bullets: [
        t("metalConstructionBullet1"),
        t("metalConstructionBullet2"),
        t("metalConstructionBullet3")
      ],
      imageUrl: Service1,
    },
    {
      id: 2,
      title: t("metalMelting"),
      description: t("metalMeltingDesc"),
      bullets: [
        t("metalMeltingBullet1"),
        t("metalMeltingBullet2"),
        t("metalMeltingBullet3")
      ],
      imageUrl: Service2,
    },
    {
      id: 3,
      title: t("waterJetCutting"),
      description: t("waterJetCuttingDesc"),
      bullets: [
        t("waterJetCuttingBullet1"),
        t("waterJetCuttingBullet2"),
        t("waterJetCuttingBullet3")
      ],
      imageUrl: Service3,
    },
    {
      id: 4,
      title: t("laserCutting"),
      description: t("laserCuttingDesc"),
      bullets: [
        t("laserCuttingBullet1"),
        t("laserCuttingBullet2"),
        t("laserCuttingBullet3")
      ],
      imageUrl: Service4,
    },
    {
      id: 5,
      title: t("customMetalCutting"),
      description: t("customMetalCuttingDesc"),
      bullets: [
        t("customMetalCuttingBullet1"),
        t("customMetalCuttingBullet2"),
        t("customMetalCuttingBullet3")
      ],
      imageUrl: Service5,
    },
    {
      id: 6,
      title: t("metalCasting"),
      description: t("metalCastingDesc"),
      bullets: [
        t("metalCastingBullet1"),
        t("metalCastingBullet2"),
        t("metalCastingBullet3")
      ],
      imageUrl: Service6,
    },
    {
      id: 7,
      title: t("machiningToolsFabrication"),
      description: t("machiningToolsFabricationDesc"),
      bullets: [
        t("machiningToolsFabricationBullet1"),
        t("machiningToolsFabricationBullet2"),
        t("machiningToolsFabricationBullet3"),
        t("machiningToolsFabricationBullet4"),
        t("machiningToolsFabricationBullet5"),
        t("machiningToolsFabricationBullet6")
      ],
      imageUrl: Service10,
    },
    {
      id: 8,
      title: t("cncMachining"),
      description: t("cncMachiningDesc"),
      bullets: [
        t("cncMachiningBullet1"),
        t("cncMachiningBullet2"),
        t("cncMachiningBullet3")
      ],
      imageUrl: Service9,
    },
      {
      id: 9,
      title: t("aluminumProcessing"),
      description: t("aluminumProcessingDesc"),
      sections: [
        {
          title: t("aluminumSec1Title"),
          points: [
            t("aluminumSec1Point1"),
            t("aluminumSec1Point2"),
            t("aluminumSec1Point3"),
            t("aluminumSec1Point4")
          ]
        },
        {
          title: t("aluminumSec2Title"),
          points: [
            t("aluminumSec2Point1"),
            t("aluminumSec2Point2"),
            t("aluminumSec2Point3")
          ]
        },
        {
          title: t("aluminumSec3Title"),
          points: [
            t("aluminumSec3Point1"),
            t("aluminumSec3Point2"),
            t("aluminumSec3Point3")
          ]
        },
        {
          title: t("aluminumSec4Title"),
          points: [
            t("aluminumSec4Point1"),
            t("aluminumSec4Point2")
          ]
        }
      ],
      imageUrl: Service11,
    },
    {
      id: 10,
      title: t("metalConcetrate"),
      description: t("."),
      bullets: [
        t("."),
        t("."),
        t("."),
        t("."),
      ],
      imageUrl: Service12,
    },
    {
      id: 11,
      title: t("CNCManufacturingAutoParts"),
      description: t("CNCManufacturingAutoPartsDesc"),
      bullets: [
        t("CNCManufacturingAutoPartsBullet1"),
        t("CNCManufacturingAutoPartsBullet2"),
        t("CNCManufacturingAutoPartsBullet3"),
        
      ],
      imageUrl: Service13,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      
      {/* Header Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          {t("servicesPageTitle")}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          {t("servicesPageSubtitle")}
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-24">
        {servicesData.map((service, index) => (
          <div key={service.id}>
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Text Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Special layout for Aluminum service */}
                {service.id === 9 ? (
                  <div className="space-y-6 mb-8">
                    {service.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="font-bold text-gray-900 mb-2">
                          {section.title}
                        </h4>

                        <ul className="space-y-2 text-gray-600">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">
                      {t("keyHighlights")}
                    </h4>

                    <ul className="space-y-3 text-gray-600">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 w-full">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Divider */}
            {index < servicesData.length - 1 && (
              <div className="my-12">
                <div className="w-1/2 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-lg" />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}