import { Divider } from "@tremor/react";

export default async function clusterDetails({ cluster_name, cluster_ip }: { cluster_name: string, cluster_ip: string }) {

  return (
    <div>
      <div className="flex justify-between">
        <p className="py-2 text-left" data-cy='header-cluster-name'>{cluster_name}</p>
        <p className="px-8 text-right" data-cy='header-cluster-ip'>Cluster IP Address: {cluster_ip}</p>
      </div>
    </div>
  )
}
