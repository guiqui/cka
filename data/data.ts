import {
  IconAdjustments,
  IconShovelPitchforks,
  IconNetwork,
  IconDatabase,
  IconHelpHexagon,
  IconShieldLock,
  IconCarGarage,
  IconDeviceFloppy,
  IconUpload,
  IconHospital,
  IconLock,
} from '@tabler/icons-react';
export const commands = [
  {
    title: 'Setting Environement',
    icon: IconAdjustments,
    anchor: 'setting_environement',
    children: [
      {
        title: 'Starting the exam and setting alias',
        command: "alias k=kubectl || source <(kubectl completion bash | sed 's/kubectl/k/g')",
        description: 'Alias setup for kubectl command.',
      },
      {
        title: 'Check Kubernetes Cluster Information',
        command: 'kubectl cluster-info',
        description:
          'Verifies the connection to the Kubernetes cluster and displays cluster endpoints.',
      },
      {
        title: 'Check Nodes in the Cluster',
        command: 'kubectl get nodes',
        description:
          'Lists all nodes in the Kubernetes cluster, verifying connectivity and cluster health.',
      },
      {
        title: 'Check Kubernetes Version',
        command: 'kubectl version',
        description:
          'Displays the Kubernetes client and server versions to ensure compatibility and functionality.',
      },
    ],
  },

  {
    title: 'Workload & Scheduling',
    anchor: 'workload_scheduling',
    icon: IconShovelPitchforks,
    children: [
      {
        title: 'Deployments',
        children: [
          {
            title: 'Create Deployment',
            command: 'kubectl create deployment <name> --image=<image>',
            description: 'Creates a deployment using a specified container image.',
          },
          {
            title: 'Scale Deployment',
            command: 'kubectl scale deployment <name> --replicas=<number>',
            description: 'Scales the number of replicas in a deployment.',
          },
          {
            title: 'Expose Service',
            command: 'kubectl expose deployment <name> --port=<port>',
            description: 'Exposes a deployment as a service on a specified port.',
          },
          {
            title: 'Update Deployment Image',
            command: 'kubectl set image deployment/<deployment-name> <container-name>=<new-image>',
            description: 'Updates the container image used in a deployment.',
          },
          {
            title: 'Rollout Status',
            command: 'kubectl rollout status deployment/<deployment-name>',
            description: 'Checks the status of a deployment rollout.',
          },
          {
            title: 'Rollback Deployment',
            command: 'kubectl rollout undo deployment/<deployment-name>',
            description: 'Rolls back a deployment to a previous revision.',
          },
          {
            title: 'Delete Deployment',
            command: 'kubectl delete deployment <name>',
            description: 'Deletes a deployment.',
          },
        ],
      },
      {
        title: 'Pods',
        children: [
          {
            title: 'List Pods',
            command: 'kubectl get pods',
            description: 'Lists all pods in the Kubernetes cluster.',
          },
          {
            title: 'Describe Pod',
            command: 'kubectl describe pod <pod-name>',
            description: 'Describes detailed information about a specific pod.',
          },
          {
            title: 'Logs of Pod',
            command: 'kubectl logs <pod-name>',
            description: 'Displays the logs of a specific pod.',
          },
          {
            title: 'Exec into Pod',
            command: 'kubectl exec -it <pod-name> -- /bin/bash',
            description: 'Opens an interactive shell session inside a specific pod.',
          },
          {
            title: 'Delete Pod',
            command: 'kubectl delete pod <pod-name>',
            description: 'Deletes a specific pod.',
          },
        ],
      },
      {
        title: 'Jobs',
        children: [
          {
            title: 'Run Job',
            command: 'kubectl run <name> --image=<image> --restart=Never',
            description: 'Runs a one-time job using a specified container image.',
          },
          {
            title: 'List Jobs',
            command: 'kubectl get jobs',
            description: 'Lists all jobs in the Kubernetes cluster.',
          },
          {
            title: 'Describe Job',
            command: 'kubectl describe job <job-name>',
            description: 'Describes detailed information about a specific job.',
          },
          {
            title: 'Delete Job',
            command: 'kubectl delete job <job-name>',
            description: 'Deletes a specific job.',
          },
        ],
      },
      {
        title: 'CronJobs',
        children: [
          {
            title: 'Create CronJob',
            command: 'kubectl create cronjob <name> --image=<image>',
            description: 'Creates a cron job using a specified container image.',
          },
          {
            title: 'List CronJobs',
            command: 'kubectl get cronjobs',
            description: 'Lists all cron jobs in the Kubernetes cluster.',
          },
          {
            title: 'Describe CronJob',
            command: 'kubectl describe cronjob <cronjob-name>',
            description: 'Describes detailed information about a specific cron job.',
          },
          {
            title: 'Delete CronJob',
            command: 'kubectl delete cronjob <cronjob-name>',
            description: 'Deletes a specific cron job.',
          },
        ],
      },
    ],
  },
  {
    title: 'Services & Networking',
    anchor: 'services_networking',
    icon: IconNetwork,
    children: [
      {
        title: 'Services',
        children: [
          {
            title: 'Create Service',
            command: 'kubectl create service <type> <name> --tcp=<port>',
            description: 'Creates a service of a specified type and name, exposing a TCP port.',
          },
          {
            title: 'Get Services',
            command: 'kubectl get services',
            description: 'Lists all services in the current namespace.',
          },
          {
            title: 'Describe Service',
            command: 'kubectl describe service <name>',
            description: 'Provides detailed information about a specific service.',
          },
          {
            title: 'Delete Service',
            command: 'kubectl delete service <name>',
            description: 'Deletes a specific service.',
          },
        ],
      },
      {
        title: 'Network Policies',
        children: [
          {
            title: 'Create NetworkPolicy',
            command:
              'kubectl create networkpolicy <policy-name> --namespace=<namespace> --spec=<spec>',
            description:
              'Creates a network policy with a specified name, namespace, and specification.',
          },
          {
            title: 'Get NetworkPolicies',
            command: 'kubectl get networkpolicies',
            description: 'Lists all network policies in the current namespace.',
          },
          {
            title: 'Describe NetworkPolicy',
            command: 'kubectl describe networkpolicy <policy-name>',
            description: 'Provides detailed information about a specific network policy.',
          },
          {
            title: 'Delete NetworkPolicy',
            command: 'kubectl delete networkpolicy <policy-name>',
            description: 'Deletes a specific network policy.',
          },
        ],
      },
    ],
  },
  {
    title: 'Storage',
    anchor: 'storage',
    icon: IconDatabase,
    children: [
      {
        title: 'Persistent Volumes (PVs)',
        description:
          'Persistent Volumes are a cluster-wide storage resource provisioned by an administrator. They provide storage resources that can be dynamically or statically provisioned.',
        children: [
          {
            title: 'Create Persistent Volume',
            command: 'kubectl create -f <pv-definition.yaml>',
            description:
              'Creates a Persistent Volume using the definition provided in the YAML file <pv-definition.yaml>.',
          },
          {
            title: 'Get Persistent Volumes',
            command: 'kubectl get pv',
            description: 'Lists all the Persistent Volumes available in the cluster.',
          },
          {
            title: 'Describe Persistent Volume',
            command: 'kubectl describe pv <pv-name>',
            description:
              'Provides detailed information about a specific Persistent Volume named <pv-name>.',
          },
          {
            title: 'Delete Persistent Volume',
            command: 'kubectl delete pv <pv-name>',
            description: 'Deletes the Persistent Volume named <pv-name> from the cluster.',
          },
        ],
      },
      {
        title: 'Persistent Volume Claims (PVCs)',
        description:
          'Persistent Volume Claims are requests for storage by a user. They claim a Persistent Volume and bind it to a pod.',
        children: [
          {
            title: 'Create Persistent Volume Claim',
            command: 'kubectl create -f <pvc-definition.yaml>',
            description:
              'Creates a Persistent Volume Claim using the definition provided in the YAML file <pvc-definition.yaml>.',
          },
          {
            title: 'Get Persistent Volume Claims',
            command: 'kubectl get pvc',
            description: 'Lists all the Persistent Volume Claims in the current namespace.',
          },
          {
            title: 'Describe Persistent Volume Claim',
            command: 'kubectl describe pvc <pvc-name>',
            description:
              'Provides detailed information about a specific Persistent Volume Claim named <pvc-name>.',
          },
          {
            title: 'Delete Persistent Volume Claim',
            command: 'kubectl delete pvc <pvc-name>',
            description: 'Deletes the Persistent Volume Claim named <pvc-name> from the cluster.',
          },
        ],
      },
      {
        title: 'Storage Classes',
        description:
          "Storage Classes provide a way to describe the 'classes' of storage offered by a cluster. Different classes might map to quality-of-service levels, backup policies, or arbitrary policies determined by the cluster administrators.",
        children: [
          {
            title: 'Get Storage Classes',
            command: 'kubectl get storageclass',
            description: 'Lists all the Storage Classes available in the cluster.',
          },
          {
            title: 'Create Storage Class',
            command: 'kubectl create -f <storageclass-definition.yaml>',
            description:
              'Creates a Storage Class using the definition provided in the YAML file <storageclass-definition.yaml>.',
          },
          {
            title: 'Describe Storage Class',
            command: 'kubectl describe storageclass <storageclass-name>',
            description:
              'Provides detailed information about a specific Storage Class named <storageclass-name>.',
          },
          {
            title: 'Delete Storage Class',
            command: 'kubectl delete storageclass <storageclass-name>',
            description: 'Deletes the Storage Class named <storageclass-name> from the cluster.',
          },
        ],
      },
    ],
  },
  {
    title: 'Troubleshooting',
    icon: IconHelpHexagon,
    anchor: 'troubleshooting',
    description:
      'Troubleshooting in Kubernetes involves identifying and resolving issues with the various resources and workloads running in the cluster. Here are the imperative commands that are particularly useful for troubleshooting:',
    children: [
      {
        title: 'Logs',
        command: 'kubectl logs <pod-name>',
        description:
          'Fetches and displays the logs of a specific pod, which is useful for debugging and understanding the behavior of the applications running in the pod.',
      },

      {
        title: 'Get Logs of a Specific Container',
        command: 'kubectl logs <pod-name> -c <container-name>',
        description: 'Fetches and displays the logs of a specific container within a pod.',
      },
      {
        title: 'Stream Logs',
        command: 'kubectl logs -f <pod-name>',
        description: 'Streams the logs of a pod, useful for monitoring logs in real-time.',
      },
      {
        title: 'Events',
        command: 'kubectl describe <resource> <name>',
        description:
          'Displays detailed information about a specific resource, including events associated with it.',
      },
      {
        title: 'List Events',
        command: 'kubectl get events',
        description:
          'Lists all events in the current namespace, providing an overview of what has happened in the cluster.',
      },
      {
        title: 'Exec into Container',
        command: 'kubectl exec -it <pod-name> -- /bin/bash',
        description:
          'Executes a command in a container within a pod, allowing interactive access (such as a bash shell) for troubleshooting.',
      },
      {
        title: 'Execute a Command in a Specific Container',
        command: 'kubectl exec -it <pod-name> -c <container-name> -- /bin/bash',
        description:
          'Executes a command in a specific container within a pod, useful when dealing with multi-container pods.',
      },
      {
        title: 'Port Forwarding',
        command: 'kubectl port-forward <pod-name> <local-port>:<remote-port>',
        description:
          "Forwards a local port to a port on a pod, allowing access to a pod's service on the local machine.",
      },
      {
        title: 'Port Forwarding for a Service',
        command: 'kubectl port-forward svc/<service-name> <local-port>:<remote-port>',
        description:
          'Forwards a local port to a port on a service, useful for accessing a service locally.',
      },
      {
        title: 'Describe Pod',
        command: 'kubectl describe pod <pod-name>',
        description:
          'Displays detailed information about a pod, including its status, events, and resource usage.',
      },
      {
        title: 'Describe Node',
        command: 'kubectl describe node <node-name>',
        description:
          'Displays detailed information about a node, which can help diagnose node-specific issues.',
      },
      {
        title: 'Get Pod Info',
        command: 'kubectl get pod <pod-name> -o yaml',
        description:
          'Retrieves detailed YAML representation of a pod, useful for understanding its configuration and current state.',
      },
      {
        title: 'Get Node Info',
        command: 'kubectl get node <node-name> -o yaml',
        description:
          'Retrieves detailed YAML representation of a node, useful for understanding its configuration and current state.',
      },
      {
        title: 'Debugging a Pod with Debug Container',
        command: 'kubectl debug pod/<pod-name> -it --image=<debug-image> --target=<container-name>',
        description: 'Attaches a debug container to a running pod for in-depth troubleshooting.',
      },
      {
        title: 'View System Logs with journalctl',
        command: 'journalctl -u <service-name>',
        description: 'Fetches and displays logs for a specific system service managed by systemd.',
      },
      {
        title: 'Stream System Logs with journalctl',
        command: 'journalctl -u <service-name> -f',
        description: 'Streams logs for a specific system service in real-time.',
      },
      {
        title: 'View Logs for All Services',
        command: 'journalctl -xe',
        description:
          'Displays the systemd logs for all services with detailed debugging information.',
      },
    ],
  },
  {
    title: 'Security and RBAC',
    icon: IconShieldLock,
    anchor: 'security',
    description:
      'Security in Kubernetes involves managing permissions, roles, and network policies to ensure that only authorized users and services can access resources and perform actions within the cluster. Here are the key imperative commands to manage security-related resources:',
    children: [
      {
        title: 'Create Role',
        command: 'kubectl create role <role-name> --verb=<verb> --resource=<resource>',
        description:
          'Creates a role with specific permissions (verbs) for a given resource. Roles are namespaced.',
      },
      {
        title: 'Get Role',
        command: 'kubectl get roles',
        description: 'Lists all roles in the current namespace.',
      },
      {
        title: 'Describe Role',
        command: 'kubectl describe role <role-name>',
        description:
          'Displays detailed information about a specific role, including the permissions it grants.',
      },
      {
        title: 'Delete Role',
        command: 'kubectl delete role <role-name>',
        description: 'Deletes a specific role from the current namespace.',
      },
      {
        title: 'Create Role Binding',
        command: 'kubectl create rolebinding <binding-name> --role=<role-name> --user=<user>',
        description:
          'Binds a role to a user, granting them the permissions defined in the role within a namespace.',
      },
      {
        title: 'Get Role Binding',
        command: 'kubectl get rolebindings',
        description: 'Lists all role bindings in the current namespace.',
      },
      {
        title: 'Describe Role Binding',
        command: 'kubectl describe rolebinding <binding-name>',
        description:
          'Displays detailed information about a specific role binding, including the role it references and the subjects it binds to.',
      },
      {
        title: 'Delete Role Binding',
        command: 'kubectl delete rolebinding <binding-name>',
        description: 'Deletes a specific role binding from the current namespace.',
      },
      {
        title: 'Create ClusterRole',
        command: 'kubectl create clusterrole <role-name> --verb=<verb> --resource=<resource>',
        description: 'Creates a cluster-wide role with specific permissions for a given resource.',
      },
      {
        title: 'Get ClusterRole',
        command: 'kubectl get clusterroles',
        description: 'Lists all cluster roles in the cluster.',
      },
      {
        title: 'Describe ClusterRole',
        command: 'kubectl describe clusterrole <role-name>',
        description:
          'Displays detailed information about a specific cluster role, including the permissions it grants.',
      },
      {
        title: 'Delete ClusterRole',
        command: 'kubectl delete clusterrole <role-name>',
        description: 'Deletes a specific cluster role from the cluster.',
      },
      {
        title: 'Create ClusterRole Binding',
        command:
          'kubectl create clusterrolebinding <binding-name> --clusterrole=<role-name> --user=<user>',
        description:
          'Binds a cluster role to a user, granting them the permissions defined in the role cluster-wide.',
      },
      {
        title: 'Get ClusterRole Binding',
        command: 'kubectl get clusterrolebindings',
        description: 'Lists all cluster role bindings in the cluster.',
      },
      {
        title: 'Describe ClusterRole Binding',
        command: 'kubectl describe clusterrolebinding <binding-name>',
        description:
          'Displays detailed information about a specific cluster role binding, including the role it references and the subjects it binds to.',
      },
      {
        title: 'Delete ClusterRole Binding',
        command: 'kubectl delete clusterrolebinding <binding-name>',
        description: 'Deletes a specific cluster role binding from the cluster.',
      },
      {
        title: 'Create Service Account',
        command: 'kubectl create serviceaccount <name>',
        description: 'Creates a new service account in the current namespace.',
      },
      {
        title: 'Get Service Account',
        command: 'kubectl get serviceaccounts',
        description: 'Lists all service accounts in the current namespace.',
      },
      {
        title: 'Describe Service Account',
        command: 'kubectl describe serviceaccount <name>',
        description: 'Displays detailed information about a specific service account.',
      },
      {
        title: 'Delete Service Account',
        command: 'kubectl delete serviceaccount <name>',
        description: 'Deletes a specific service account from the current namespace.',
      },
    ],
  },
  {
    title: 'Cluster Maintenance',
    icon: IconCarGarage,
    anchor: 'cluster_maintenance',
    children: [
      {
        title: 'Drain Node',
        command: 'kubectl drain <node-name> --ignore-daemonsets --delete-local-data',
        description: 'Safely evicts all pods from a node to perform maintenance.',
      },
      {
        title: 'Cordon Node',
        command: 'kubectl cordon <node-name>',
        description:
          'Marks a node as unschedulable, preventing new pods from being scheduled on it.',
      },
      {
        title: 'Uncordon Node',
        command: 'kubectl uncordon <node-name>',
        description: 'Marks a node as schedulable, allowing new pods to be scheduled on it.',
      },
      {
        title: 'Cluster Information',
        command: 'kubectl cluster-info',
        description: "Displays information about the cluster's master and services.",
      },
    ],
  },
  {
    title: 'Backup/Restore',
    icon: IconDeviceFloppy,
    anchor: 'backup_restore',
    description:
      'Backup and restore operations are crucial for maintaining data integrity and recoverability. This can be done manually by backing up the etcd database or using kube-apiserver snapshots.',
    children: [
      {
        title: 'Backup etcd Manually',
        command:
          'ETCDCTL_API=3 etcdctl snapshot save <backup-file> \\\n  --endpoints=https://127.0.0.1:2379 \\\n  --cacert=<path-to-cafile> \\\n  --cert=<path-to-certfile> \\\n  --key=<path-to-keyfile>',
        description:
          'Creates a snapshot of the etcd database, which can be used for disaster recovery.',
      },
      {
        title: 'Restore etcd Manually',
        command:
          'ETCDCTL_API=3 etcdctl snapshot restore <backup-file> \\\n  --data-dir=/var/lib/etcd-from-backup',
        description: 'Restores the etcd database from a snapshot.',
      },
      {
        title: 'Backup Using kube-apiserver',
        command:
          'kubectl get --raw /apis/coordination.k8s.io/v1/namespaces/kube-system/leases/kube-controller-manager -o json > kube-controller-manager.json\nkubectl get --raw /apis/coordination.k8s.io/v1/namespaces/kube-system/leases/kube-scheduler -o json > kube-scheduler.json',
        description: "Fetches critical Kubernetes components' state for backup.",
      },
      {
        title: 'Restore Using kube-apiserver',
        command:
          'kubectl apply -f kube-controller-manager.json\nkubectl apply -f kube-scheduler.json',
        description: "Restores Kubernetes components' state from backup.",
      },
    ],
  },
  {
    title: 'Upgrade a Cluster with kubeadm',
    icon: IconUpload,
    anchor: 'upgrade',
    description:
      'Upgrading a Kubernetes cluster involves several children to ensure a smooth transition to the new version.',
    children: [
      {
        title: 'Upgrade the Control Plane',
        command: 'kubeadm upgrade plan\nkubeadm upgrade apply <version>',
        description: 'Plans and applies the upgrade to the control plane.',
      },
      {
        title: 'Upgrade kubelet and kubectl',
        command:
          'apt-get update && apt-get install -y kubelet=<version> kubectl=<version>\nsystemctl restart kubelet',
        description: 'Upgrades the kubelet and kubectl binaries on each node.',
      },
      {
        title: 'Upgrade Worker Nodes',
        command:
          'kubectl drain <node-name> --ignore-daemonsets --delete-local-data\nkubeadm upgrade node\nkubectl uncordon <node-name>',
        description:
          'Drains each worker node, applies the upgrade, and then marks the node as schedulable again.',
      },
    ],
  },

  {
    title: 'Helm',
    description: 'Helm Commands and Applying Helm Charts',
    icon: IconHospital,
    anchor: 'helm',
    children: [
      {
        title: 'Helm Install',
        command: 'helm install <release-name> <chart>',
        description:
          'Installs a Helm chart onto your Kubernetes cluster.\n\n`<release-name>`: Specifies the name for the release of the Helm chart.\n`<chart>`: Specifies the name or path to the Helm chart to install.',
      },
      {
        title: 'Helm Upgrade',
        command: 'helm upgrade <release-name> <chart>',
        description:
          'Upgrades an existing Helm release to a new version of a chart or with modified configuration.\n\n`<release-name>`: Specifies the name of the release to upgrade.\n`<chart>`: Specifies the name or path to the new Helm chart or chart archive.',
      },
      {
        title: '`kubectl` Command for Applying Helm Charts',
        command: 'kubectl apply -f <helm-chart.yaml>',
        description:
          'Applies the Kubernetes manifests contained in `<helm-chart.yaml>`, which represents the rendered Kubernetes YAML manifests of a Helm chart.',
      },
    ],
  },

  {
    title: 'Certificates',
    description: 'OpenSSL Commands for Generating Keys and Certificates',
    icon: IconLock,
    anchor: 'certificate',
    children: [
      {
        title: 'Generate a Private Key for the CA',
        command: 'openssl genrsa -out ca.key 2048',
        description: 'Generates a 2048-bit private key for the CA.',
      },
      {
        title: 'Create a Self-Signed Certificate for the CA',
        command: 'openssl req -x509 -new -nodes -key ca.key -sha256 -days 365 -out ca.crt',
        description:
          'Generates a self-signed CA certificate valid for 365 days. You will be prompted to enter information about the CA.',
      },
      {
        title: 'Generating Public and Private Keys',
        children: [
          {
            title: 'Generate a Private Key',
            command: 'openssl genrsa -out server.key 2048',
            description: 'Generates a 2048-bit private key.',
          },
          {
            title: 'Create a Certificate Signing Request (CSR)',
            command: 'openssl req -new -key server.key -out server.csr',
            description:
              'Generates a CSR using the private key. You will be prompted to enter information about the certificate.',
          },
          {
            title: 'Sign the CSR with the CA to Create the Certificate',
            command:
              'openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256',
            description:
              'Signs the CSR with the CA’s private key to generate a certificate valid for 365 days.',
          },
        ],
      },
      {
        title: 'Viewing the Public Key Information',
        children: [
          {
            title: 'Generate a Private Key',
            command: 'openssl genrsa -out server.key 2048',
            description: 'Generates a 2048-bit private key.',
          },
          {
            title: 'Create a Certificate Signing Request (CSR)',
            command: 'openssl req -new -key server.key -out server.csr',
            description:
              'Generates a CSR using the private key. You will be prompted to enter information about the certificate.',
          },
          {
            title: 'Sign the CSR with the CA to Create the Certificate',
            command:
              'openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256',
            description:
              'Signs the CSR with the CA’s private key to generate a certificate valid for 365 days.',
          },
          {
            title: 'View Public Key Information from the Certificate',
            command: 'openssl x509 -in server.crt -text -noout',
            description:
              'Displays the content of the certificate, including the public key information.',
          },
          {
            title: 'Extract the Public Key from the Private Key',

            command: 'openssl rsa -in server.key -pubout -out server_public.key',

            description: 'Extracts the public key from the private key and saves it to a file.',
          },
          {
            title: 'View Public Key Information from the Public Key File',

            command: 'openssl rsa -pubin -in server_public.key -text -noout',

            description: 'Displays the content of the public key file.',
          },
        ],
      },
    ],
  },
];
