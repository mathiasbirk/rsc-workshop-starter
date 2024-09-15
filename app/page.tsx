import LinkButton from '@/components/ui/LinkButton';

export default function RootPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1>React Server Components and React 19 in the Next.js App Router</h1>
      <LinkButton href="/client-server">Client Server</LinkButton>
      <LinkButton href="/transitions">Transitions</LinkButton>
      <LinkButton href="/suspense">Suspense</LinkButton>

      <LinkButton theme={'secondary'} href="/data-fetching">
        Data fetching
      </LinkButton>
    </div>
  );
}
