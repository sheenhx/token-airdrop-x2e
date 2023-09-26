export function Link({ txHash }: { txHash: string }) {
  const url = `https://explorer.mxc.com/tx/${txHash}`
  return (
    <p className="">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {txHash}
      </a>
    </p>
  )
}
