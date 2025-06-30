print ('Comming soon!')
###

搜索 debugTabLabel
第一个
}), e && t.push({
去掉e&&

}), t.push({
                        label: ".cheatsTabLabel",
                        image: aO,
                        value: "cheats"
                    }), t.push({
                        label: ".resourcePacksTabLabel",
                        image: oO,
                        value: "resource-packs"
                    }, {
                        label: ".behaviorPacksTabLabel",
                        image: cO,
                        value: "behavior-packs"
                    }), t.push({
                        label: ".experimentalFeaturesTabLabel",
                        image: nO,
                        value: "experimental"
                    }), e && t.push({
                        label: ".debugTabLabel",
                        image: rO,
                        value: "debug"
                    }), t
                }), [], [(0, r.useSharedFacet)(mi)]);
                return a.createElement(RP.ItemList, {
                    items: t,
                    renderItem: t => a.createElement(SO, {
                        item: t.item,
                        worldPacks: e
                    })
                })
            },
            FO = (e, t, n) => `/${e}/${t}/${n?"available":"active"}`,
            SO = ({
                item: e,
                worldPacks: t
            }) => {
                const {
                    t: n
                } = tc("CreateNewWorldSideMenu"), l = m(







搜索 fileManagementExportWorldLabel
第一个
往前找，
a.createElement(r.Mount, {when: y
改成 when:true


inputLegend: c(".fileManagementDeleteWorldLabel"),
                autofocus: !0,
                horizontal: !0,
                disabled: m
            }, c(".fileManagementDeleteWorldLabel"))), a.createElement(r.Mount, {
                when: y
            }, a.createElement(a.Fragment, null, a.createElement(om, {
                size: 1
            }), a.createElement("div", {
                style: {
                    flexDirection: "row"
                }
            }, a.createElement(mg, {
                variant: "secondary",
                gamepadIndex: 2,
                onClick: i,
                inputLegend: c(".fileManagementExportWorldLabel"),
                autofocus: !0,
                horizontal: !0,
                disabled: m
            }, c(".fileManagementExportWorldLabel"))))), a.createElement(om, {
                size: 1
            }), a.createElement(qf, null, p), a.createElement(om, {
                size: 3
            })), a.createElement(r.Mount, {
                when: u.isVisible
            }, a.createElement(xO.Component, {
                onClose: u.hide,
                onConfirm: l,
                reasons: n,
                isEditWorld: s
            }))))
        }
        fN.Wrapper = EN, fN.DefaultFields = gN;







搜索 onClearPlayerData
第二个
}), a.createElement(r.Mount, {when: E}, 
a.createElement(ID, {
    onExportTemplate: t,
    onClearPlayerData: n
改成 when:true



                disabled: (0, r.useFacetMap)((e => !e.isBiomeOverrideActive), [], [o]),
                onItemSelect: (0, r.useFacetCallback)((e => t => {
                    e.biomeOverrideId = t
                }), [], [o]),
                value: (0, r.useFacetMap)((e => e.biomeOverrideId), [], [o]),
                focusOnSelectedItem: !0
            }), a.createElement(r.Mount, {
                when: E
            }, a.createElement(ID, {
                onExportTemplate: t,
                onClearPlayerData: n
            }))))
        }
        const ID = ({
            onExportTemplate: e,
            onClearPlayerData: t
        }) => {
            const {
                t: n
            } = tc("EditWorld.exportWorldFlow");
            return a.createElement(Kf, null, a.createElement(fm, {
                type: "sectionHeader"
            }, "File management"), a.createElement(om, {
                size: 4
            }), a.createElement(mg, {
                variant: "secondary",
                onClick: t,
                inputLegend: "Clear player data"






