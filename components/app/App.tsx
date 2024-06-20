'use client';
import './App.css';
import Image from 'next/image';
import { AppShell, Burger, Group, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CKANavigationBar } from '../navigation/navigation';
import { Flex } from '@mantine/core';
import '@mantine/core/styles.css';
import GitHubButton from 'react-github-btn';
import { CommandContainer } from '../commandContainer/command.container';
import { commands } from '../../data/data';
function App() {
  const [opened, { toggle }] = useDisclosure();
  const handleClick = () => {
    window.open('https://k8studio.io', '_blank');
  };
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
            <Image src={`/logo.png`} alt={'K8Studio Home Page'} width={281} height="38" />
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <CKANavigationBar data={commands} />
        <Stack
          className="sponso-footer"
          align="center"
          justify="center"
          gap="xs"
          onClick={handleClick}
        >
          <Text size="sm" c="dimmed">
            Sponsored by{' '}
          </Text>
          <Image src={`/k8logo.png`} alt={'K8Studio Home Page'} width={184} height="36" />
          <GitHubButton
            href="https://github.com/guiqui/cka"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-show-count="true"
            aria-label="Star guiqui/k8Studio on GitHub"
          >
            Star
          </GitHubButton>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <CommandContainer data={commands} />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
