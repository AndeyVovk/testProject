import React, {ReactElement} from "react";
import {ExpansionList, ExpansionPanel, usePanels} from "@react-md/expansion-panel";
import {Configuration} from "@react-md/layout";
import {Grid} from "@react-md/utils";

import "./review-module.scss"
import {Module, Stack} from "../Interface/interface";

export function SecondComponent(): ReactElement {
    // @ts-ignore
    let storeData = JSON.parse(localStorage.getItem('stacks'));
    const [panels, onKeyDown] = usePanels({
        idPrefix: "simple-panels",
        count: storeData.length,
        defaultExpandedIndex: 0,
    });
    return (
        <React.Fragment key={panels.length}>
            <Configuration>
                <div className="module">
                    <ExpansionList onKeyDown={onKeyDown} className="module__grid">
                        <div>
                            {storeData.map((v: Stack, i: number) => {
                                return <ExpansionPanel
                                    {...panels[i]}
                                    id={v.id}
                                    key={v.id}
                                    header={v.data.text}
                                    disablePadding
                                >
                                    <Grid columns={1} className="module__view-module-grid"
                                          id={v.id}>
                                        {
                                            v.data.module?.map((module: Module) =>
                                                <span key={module.text} className="module_name">{module.text}</span>
                                            )
                                        }
                                    </Grid>
                                </ExpansionPanel>

                            })}
                        </div>
                    </ExpansionList>
                </div>
            </Configuration>
        </React.Fragment>
    )
}
