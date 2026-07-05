import { LightningElement } from 'lwc';
export default class Tabcustomslds extends LightningElement {


    tabs = [
    {
      label: "Tab 1",
      content: "This is Tab 1 content.",
      active: true,
      tabClass: "slds-tabs_default__item slds-is-active",
    },
    {
      label: "Tab 2",
      content: "This is Tab 2 content.",
      active: false,
      tabClass: "slds-tabs_default__item",
    },
    {
      label: "Tab 3",
      content: "This is Tab 3 content.",
      active: false,
      tabClass: "slds-tabs_default__item",
    },
  ];

  handleTabClick(event) {
    const selectedTab = event.currentTarget.dataset.tab;

    this.tabs = this.tabs.map((tab) => {
      const isActive = tab.label === selectedTab;
      return {
        ...tab,
        active: isActive,
        tabClass: isActive
          ? "slds-tabs_default__item slds-is-active"
          : "slds-tabs_default__item",
      };
    });
  }

}