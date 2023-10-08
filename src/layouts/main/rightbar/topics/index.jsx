import React from 'react';
import { topics } from '~/utils/consts';
import Topic from './topic';
import { Link } from 'react-router-dom';
import SidebarSection from '~/components/button/sidebar-section';

export default function Topics() {
  return (
    <SidebarSection title='İlgini çekebilecek gündemler' more='/trends'>
      {topics.map((item, index) => (
        <Topic key={index} item={item} />
      ))}
    </SidebarSection>
  );
}
