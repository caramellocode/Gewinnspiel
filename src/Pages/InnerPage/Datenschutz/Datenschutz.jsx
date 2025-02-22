/* eslint-disable no-unused-vars */
import React from 'react';
import { datenschutzData } from './DatenschutzData';
import { Link } from 'react-router-dom';

const Datenschutz = () => {
    return (
        <div className='py-24 bg-lightBlack'>
            <div className="container mx-auto px-5">
                <h1 className='text-4xl  text-[#DEBF64] pt-24 pb-8'>Datenschutz</h1>

                {
                    datenschutzData.paragraph.map((para, i) => (
                        <p className='text-white text-xl py-3' key={i}>{para}</p>
                    ))
                }

                <ul className='py-3 list-decimal'>
                    {
                        datenschutzData.lists.map((listData, i) => (
                            <li key={i} className='text-white text-xl '>
                                <h5 className='text-xl  text-white'>{listData?.title}</h5>
                                {
                                    listData.desc.length > 0 ? listData.desc.map((para, i) => (
                                        <p key={i} className='font-normal py-3'>{para}</p>
                                    )) : ""
                                }
                                <p className='text-white text-xl font-normal pb-5'>{
                                    listData.subtitle != "" && listData.subtitle
                                }</p>
                                <ol type='A' className="list-[upper-alpha] ps-5">
                                    {
                                        listData.subLists.length > 0 && listData.subLists.map((lst, i) => (
                                            <li key={i}>
                                                <h5 className='capitalize'>{lst.title}</h5>
                                                <p className='font-normal py-3'>{lst.desc}</p>
                                                {
                                                    lst.list.length > 0 && <ul className='ps-5 list-disc'>
                                                        {
                                                            lst.list.map((lis, i) => (
                                                                <li className='font-normal py-2' key={i}>{lis}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                }
                                            </li>
                                        ))
                                    }
                                </ol>

                                {
                                    listData.contact && listData.contact.para && listData.contact.para.length > 0 && listData.contact.para.map((pr, i) => (
                                        <p className='py-1 font-normal' key={i}>{pr}</p>
                                    ))
                                }
                                {
                                    listData.contact && listData.contact.tel ? <div className='flex gap-3'>
                                        <p>Tel:</p>
                                        <Link className='font-normal' to={`tel:${listData.contact.tel}`}>{listData.contact.tel}</Link>
                                    </div> : undefined
                                }
                                {
                                    listData.contact && listData.contact.email ? <div className='flex gap-3'>
                                        <p>Email:</p>
                                        <Link className='font-normal text-[#DEBF64]' to={`mailto:${listData.contact.email}`}>{listData.contact.email}</Link>
                                    </div> : undefined
                                }
                                {
                                    listData.contact && listData.contact.website ? <div className='flex gap-3 pb-7'>
                                        <p>Website:</p>
                                        <a className='font-normal text-[#DEBF64]' target='_blank' href={`${listData.contact.website}`} rel="noreferrer">{listData.contact.website}</a>
                                    </div> : undefined
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Datenschutz;