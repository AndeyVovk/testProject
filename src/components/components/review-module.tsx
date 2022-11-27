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
        count: storeData?.length,
        defaultExpandedIndex: 0,
    });
    console.log(storeData)
    return (
        <React.Fragment key={panels.length}>
            <Configuration>
                <div className="module">
                    <ExpansionList onKeyDown={onKeyDown} className="module__grid">
                        <div>
                            {storeData.map((stack: Stack, i: number) => {
                                return <ExpansionPanel
                                    {...panels[i]}
                                    key={stack.id}
                                    header={stack.data.text}
                                    disablePadding
                                >
                                    <Grid columns={1} className="module__view-module-grid"
                                          id={stack.id}>
                                        {
                                            stack.data.module?.map((module: any) => {
                                              return  <ExpansionPanel
                                                    {...panels[i]}
                                                    key={module.text}
                                                    header={module.text}
                                                    disablePadding
                                                >
                                                    <Grid columns={1} className="module__view-module-grid"
                                                          id={stack.id}>
                                                        {
                                                            module.module?.map((module: any) => {
                                                                    return <span key={module.text}
                                                                                 className="module_name">{module.text}</span>

                                                                }
                                                            )

                                                        }
                                                    </Grid>
                                                </ExpansionPanel>

                                                }
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
