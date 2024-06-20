'use client';
import './App.css';
import Image from 'next/image';
import { AppShell, Burger, Group, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CKANavigationBar } from '../navigation/navigation';
import { Flex } from '@mantine/core';
import '@mantine/core/styles.css';
import Logo from './assets/logo.png';
import { CommandContainer } from '../commandItem/command.item';
import { commands } from '../../data/data';
function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 350,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex gap="md" h="100%" justify="flex-start" align="center" direction="row" wrap="nowrap">
            <Image src={`/logo.png`} alt={'K8Studio Home Page'} width={285} height="40" />
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <CKANavigationBar data={commands} />
      </AppShell.Navbar>
      <AppShell.Main>
        <CommandContainer data={commands} />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
