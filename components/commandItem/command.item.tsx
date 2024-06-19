//@ts-nocheck
import { CodeHighlight } from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import { useLocation } from 'react-router-dom';

import { Text, Space } from '@mantine/core';
export const SectionItem = ({ data, indent = 0 }) => {
  if (!data || data.length == 0 || !data.children) return <div>no section</div>;
  debugger;
  return (
    <div id={data.anchor} style={{ marginLeft: 10 * indent }}>
      <Text fw={700} size="xl">
        {data.title}
      </Text>
      <Text c="dimmed" size="sm">
        {data.description}
      </Text>

      {data.children.map((item, index) =>
        item.children ? (
          <SectionItem data={item} key={index} indent={indent + 1} />
        ) : (
          <CommandItem data={item} key={index} indent={indent + 1} />
        )
      )}
      <Space h="lg" />
    </div>
  );
};

export const CommandItem = ({ data, indent = 0 }) => {
  return (
    <div style={{ marginLeft: 10 * indent }}>
      {data.icon ? <data.icon stroke={1.5} /> : null}
      <Text size="lg">{data.title}</Text>
      <Text c="dimmed" size="md">
        {data.description}
      </Text>
      <CodeHighlight
        code={data.command ? data.command : ''}
        language="sh"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
      />
      <Space h="sm" />
    </div>
  );
};

export const CommandContainer = ({ data }) => {
  if (!data || data.length == 0) return <div>no data</div>;

  return (
    <div>
      {data.map((item, index) => {
        return <SectionItem data={item} key={index} />;
      })}
    </div>
  );
};
