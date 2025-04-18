type Issue = {
  id: string;
  title: string;
  description: string;
  branchName: string;
  state: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

type IssueProps = {
  issues: Issue[];
};
const Issues = ({ issues }: IssueProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  return (
    <div className="space-y-4">
      {issues &&
        issues.length > 0 &&
        issues.map((issue) => {
          return (
            <div
              key={issue?.id}
              className="px-4 space-y-2 py-2 bg-neutral-900 rounded-md"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold">{issue?.title}</h2>
                <span className="p-1 border border-neutral-500 rounded-md text-xs">
                  {issue?.branchName}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{issue?.description}</p>
              <div className="flex items-center justify-end">
                <a
                  target="_blank"
                  className="px-2 py-1 text-sm font-semibold text-white bg-neutral-500 rounded-md hover:bg-neutral-600"
                  href={issue?.url}
                >
                  See on Linear
                </a>
              </div>
              {/* {issue?.state} */}
              {/* <pre>{JSON.stringify(issue, null, 2)}</pre> */}
            </div>
          );
        })}
    </div>
  );
};

export default Issues;
