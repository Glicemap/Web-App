const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Navegação',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'patient-list',
                    title: 'Lista de Pacientes',
                    type: 'item',
                    url: '/patient-list',
                    icon: 'feather icon-users'
                },
                {
                    id: 'new-patient',
                    title: 'Novo Paciente',
                    type: 'item',
                    url: '/new-patient',
                    icon: 'feather icon-user-plus'
                },
                {
                    id: 'settings',
                    title: 'Configurações',
                    type: 'item',
                    url: '/settings',
                    icon: 'feather icon-settings'
                },
                {
                    id: 'notifications',
                    title: 'Notificações',
                    type: 'item',
                    url: '/notifications',
                    icon: 'feather icon-bell'
                }
            ]
        }        
    ]
};

export default menuItems;
